import axios from "axios"
import { useEffect } from "react"
import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (input) => {
        const res = await axios.post("/auth/login", input);
        setCurrentUser(res.data);
    }

    const logout = async () => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
}