import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getdata() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    setUser(data);
    console.log("getdata() data", data);
  }

  useEffect(() => {
    getdata();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

// export const UserProvider = ({ children }) => {
//   return <UserContext.Provider value="홍길동">{children}</UserContext.Provider>;
// };
