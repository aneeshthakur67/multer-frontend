import { createContext, useContext, useEffect, useState } from "react";
import { makeApiRequest } from "../utils/apiService";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await makeApiRequest(
          "http://localhost:3000/api/user/gallery",
          "GET",
          null,
        );
        setUserData(response.data);
      } catch (err) {
        setUserData(null);
        navigate("/");
      }
    }
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
export { UserContext, UserProvider, useUserContext };
