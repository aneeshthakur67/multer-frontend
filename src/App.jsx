import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { UserProvider } from "./context/UserContext";
const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
