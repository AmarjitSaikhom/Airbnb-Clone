import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessagePage from "./landing_page/messages/MessagePage.jsx";
import TipPage from "./landing_page/tips/TipPage.jsx";
import WishlistPage from "./landing_page/wishlists/WishlistPage.jsx";
import AirbnbYourHome from "./landing_page/airbnb_your_home/AirbnbYourHomePage.jsx";
import Account from "./landing_page/account/AccountPage.jsx";
import HelpCenter from "./landing_page/help_centre/HelpCentrePage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/tips" element={<TipPage />} />
      <Route path="/wishlists" element={<WishlistPage />} />
      <Route path="/airbnbYourHome" element={<AirbnbYourHome />} />
      <Route path="/account" element={<Account />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
    </Routes>
  </BrowserRouter>
);
