import { useContext } from "react";
import { AuthStore } from "../stores/AuthStore";

export const useAuth = () => {
    const constext = useContext(AuthStore);
    if (!constext) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return constext;
};