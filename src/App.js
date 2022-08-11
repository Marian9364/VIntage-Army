import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ItemProvider } from "./contexts/ItemContext";
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
import { AddItemPage } from "./components/add-item-page/AddItemPage";
import { EditItemPage } from "./components/edit-page/EditItemPage";
import { ItemDetailsPage } from "./components/item-details-page/ItemDetailsPage";
import { NotFoundPage } from "./components/not-found-page/NotFoundPage";

function App() {

  return (
    <AuthProvider>
      <ItemProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/users/:userId" element={<ProfilePage />} />
            <Route path="/items" element={<AllItemsPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add" element={<AddItemPage />} />
            <Route path="/items/:itemId/edit" element={<EditItemPage />} />
            <Route path="/items/:itemId" element={<ItemDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </ItemProvider>
    </AuthProvider>
  );
}

export default App;
