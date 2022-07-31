import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { MainPage } from "./components/main-page/MainPage";
import { AboutPage } from "./components/about-page/AboutPage";
import { RegisterPage } from "./components/register-page/RegisterPage";
import { ContactPage } from "./components/contact-page/ContactPage";
import { LoginPage } from "./components/login-page/LoginPage";
import { Footer } from "./components/footer/Footer";

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={< MainPage />} />
      <Route path="/login" element={< LoginPage />} />
      <Route path="/register" element={< RegisterPage />} />
      <Route path="/about" element={< AboutPage />} />
      <Route path="/contact" element={< ContactPage />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
