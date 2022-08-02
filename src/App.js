import { Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext";
import { Header } from "./components/header/Header";
import { MainPage } from "./components/main-page/MainPage";
import { AboutPage } from "./components/about-page/AboutPage";
import { RegisterPage } from "./components/register-page/RegisterPage";
import { ContactPage } from "./components/contact-page/ContactPage";
import { LoginPage } from "./components/login-page/LoginPage";
import { Footer } from "./components/footer/Footer";
import { ProfilePage } from "./components/profile-page/ProfilePage";
import { AllItemsPage } from "./components/all-items-page/AllItemsPage";
import { Logout } from "./components/logout/Logout";

function App() {
  const [user, setUser] = useLocalStorage("user", {
    email: "",
    _id: "",
    accessToken: "",
  });

  const login = (authData) => {
    setUser(authData);
  };

  const onLogout = () => {
    setUser({
      email: "",
      _id: "",
      accessToken: "",
    });
  };

  return (
    <AuthContext.Provider value={{user, login}}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/items" element={<AllItemsPage />} />
        <Route path="/logout" element={<Logout onLogout={onLogout} />} />
      </Routes>
      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
