import React from "react";


// method hai create context and isko humne variable my store kar liya 
const UserContext = React.createContext();

//har ek context provider hota hai
// so context ky sath provider bhi banana padta hai jo provide karva ske

export default UserContext;


// esse sabko wrap karegy 
// context ek global varible hai essa smjho
{/* <UserContext>
<Login/> 
<Card>
    <Data/>
</Card>
</UserContext> */}