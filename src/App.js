import { Route, Routes, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext";
import { ItemContext } from "./contexts/ItemContext"
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
import { EditItemPage } from "./components/edit-page/EditPage";
import { ItemDetailsPage } from "./components/item-details-page/ItemDetailsPage";
import { NotFoundPage } from "./components/not-found-page/NotFoundPage";
import { useState, useEffect } from "react";
import * as itemsService from "./services/itemsService";


function App() {
  const [items, setItems] = useState([]);

  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  const addComment = (itemId, comment) => {
    setItems((state) => {
      const item = state.find((x) => x._id == itemId);

      const comments = item.comments || [];
      comments.push(comment);

      return [...state.filter((x) => x._id !== itemId), { ...item, comments }];
    });
  };

  const addItem = (itemData) => {
    setItems((state) => [...state, itemData]);

    navigate("/items");
  };
  const editItem = (itemId, itemData) => {
    setItems((state) => state.map((x) => (x._id === itemId ? itemData : x)));
  };

  useEffect(() => {
    itemsService.getAll().then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <ItemContext.Provider value={{ items, addItem, editItem }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/users/:userId" element={<ProfilePage />} items={items} />
            <Route path="/items" element={<AllItemsPage items={items} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add" element={<AddItemPage />} />
            <Route path="/items/:itemId/edit" element={<EditItemPage />} />
            <Route
              path="/items/:itemId"
              element={<ItemDetailsPage items={items} addComment={addComment} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </ItemContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
