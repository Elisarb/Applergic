import React, { useContext, useState } from 'react';
import Login from '../Pages/Login/Login';
export const FffContext = React.createContext();
const UseContextComponent = () => {
  const userDefault = { email: "", 
  password: "",
}

  const [user, setUser] = useState(userDefault)

  return (
    <div>
         <FffContext.Provider value={{user, setUser}}>
         <Login></Login>
      </FffContext.Provider>
      </div>
    );
}

export default UseContextComponent;