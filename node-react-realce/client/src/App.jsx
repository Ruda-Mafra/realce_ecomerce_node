
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/login";

function App() {

  return (
    <>
   <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/products/:id" element={<ProductDetail />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
