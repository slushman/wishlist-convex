import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const tasks = useQuery(api.tasks.get);

  return (
    <>
      <h1>Your Wishlist</h1>
      <ul>
        {tasks?.map(({ _id, text }) => (
          <li key={_id}>{text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
