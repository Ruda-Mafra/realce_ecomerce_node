
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Products from "./components/Products";

function App() {

  return (
    <>
   <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/products/:id" element={<Products />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
