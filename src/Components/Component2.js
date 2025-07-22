import { useContext } from "react";
import GlobalContext from "./GlobalContext";

function Component2() {
  const user = useContext(GlobalContext);
  return (
    <div>
      <h3>Component2</h3>
      <h1>
        <p>Welcome, {user}!</p>
      </h1>
    </div>
  );
}
export default Component2;
