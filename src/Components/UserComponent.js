import React, { useState } from "react"; 
import Component1 from "./Component1"; 
import GlobalContext from "./GlobalContext"; 
import Posts from "./Posts"; 

function UserComponent() {
  const [user, setUser] = useState("Balaji");

  return (
    <GlobalContext.Provider value={user}>
      <div>
        <Posts />
      </div>
    </GlobalContext.Provider>
  );
}

export default UserComponent;
