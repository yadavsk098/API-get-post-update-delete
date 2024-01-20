import React, { useState } from "react";
import UserContext from "./UserContext";



// children --> jo bhi aapke pass aa raha hai aage pass kardo
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        // konsi value ka access dena hai vo bhi batana padega so user, setUser in doo ka acces de diya
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;