import { Hono } from "hono";
import type { FC } from "hono/jsx";
import permutator from "../helpers/permutator";

const perm = new Hono();

const Permutator: FC<{ arrayLength: number }> = (props: {
  arrayLength: number;
}) => {
  var array = Array.from(Array(props.arrayLength).keys());
  if (props.arrayLength <= 5) {
    array = permutator(array);
  }
  return (
    <main>
      <h1>permutated array: {JSON.stringify(array).split(",")}</h1>
    </main>
  );
};

perm.post("/perm", async (c) => {
  const { length } = await c.req.json();
  console.log(length);

  return c.html(<Permutator arrayLength={length} />);
});

export default perm;

