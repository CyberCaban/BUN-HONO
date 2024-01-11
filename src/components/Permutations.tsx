import { Hono } from "hono";
import type { FC } from "hono/jsx";

const perm = new Hono();

const Permutator: FC<{ arrayLength: number }> = (props: {
  arrayLength: number;
}) => {
  const array = Array.from(Array(props.arrayLength).keys());
  return (
    <main>
      <h1>permutation array: {JSON.stringify(array)}</h1>
    </main>
  );
};

perm.get("/perm", (c) => {
  return c.html(<Permutator arrayLength={10} />);
});

export default perm;

