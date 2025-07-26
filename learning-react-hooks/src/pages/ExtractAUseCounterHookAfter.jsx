import useCounter from "../hooks/useCounter";

export default function ExtractAUseCounterHookAfter() {
  const count = useCounter();

  return <h1>Seconds passed: {count}</h1>;
}
