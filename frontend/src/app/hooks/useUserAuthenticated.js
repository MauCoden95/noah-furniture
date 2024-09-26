import { useEffect, useState } from "react";

function useUserAuthenticated() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {           
            setIsAuthenticated(true);
        }

        setLoading(false); 
    }, []);

    return { isAuthenticated, loading }; 
}

export default useUserAuthenticated;
