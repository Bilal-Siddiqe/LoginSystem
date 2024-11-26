import React, { useState } from 'react';
import { createContext } from 'react'

const mainContext = createContext();

export default function DataProvider({ children }) {


    const [login, setLogin] = useState(false)
    const [loginUser, setLoginUser] = useState({
        fullName: "",
        age: 0,
        phoneNumber: "",
        gender: "",
        email: "",
        pwd: "",
    });



    return (
        <div>
            <mainContext.Provider value={{ loginUser, setLoginUser, login, setLogin }} >
                {children}
            </mainContext.Provider>
        </div>
    )
}
export { mainContext };
