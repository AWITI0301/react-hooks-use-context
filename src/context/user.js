import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };



   // const currentUser = {
    //     name: "Duane",
    //     interests: ["Coding", "Biking", "Words ending in 'ing'"],
    //   };