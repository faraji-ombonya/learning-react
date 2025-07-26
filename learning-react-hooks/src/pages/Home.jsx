import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Learning React Hooks Challenges</h1>
      <div>
        <Link to={"/extract-a-use-counter-hook"}>
          Extract a useCounter Hook
        </Link>
      </div>

      <div>
        <Link to={"/extract-a-use-counter-hook-after"}>
          Extract a useCounter Hook After
        </Link>
      </div>
    </div>
  );
}
