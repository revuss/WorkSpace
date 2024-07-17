import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";
import UserLayout from "./Layouts/userLayout";

function App() {
  const [themeMode, setthemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    return savedTheme ? savedTheme : "light";
  });

  const darkTheme = () => {
    setthemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  const lightTheme = () => {
    setthemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
