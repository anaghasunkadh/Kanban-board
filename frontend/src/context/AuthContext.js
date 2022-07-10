import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["Authorization"] = token;
            setUser({ token });
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem("token", userData.token);
        axios.defaults.headers.common["Authorization"] = userData.token;
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
