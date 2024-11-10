import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart/cart";
import Description from "./components/Description";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/description" element={<Description />} />
    </Routes>
  );
}

export default App;
