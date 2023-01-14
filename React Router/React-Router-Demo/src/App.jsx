import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import NewProduct from "./components/Nested routes/NewProduct";
import Feature from "./components/Nested routes/feature";
import { Product } from "./components/Nested routes/Product";
import { NoMatch } from "./components/NoMatch";
import { OrderSummary } from "./components/OrderSummary";
import Profile from "./components/auth/Profile";
import { AuthProvider } from "./components/auth/Auth";
import { Login } from "./components/auth/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* route is for individual route */}
          {/* path is a prop means property and element is a prop too */}
          <Route
            path="/" //  here the "/" means the default localhost link on page
            element={<Home />}
          ></Route>
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="order-summary"
            element={<OrderSummary />}
          />

          <Route
            path="product"
            element={<Product />}
          >
            <Route
              index
              element={<Feature />}
            />
            <Route
              path="featured-products"
              element={<Feature />}
            />

            <Route
              path="new-products"
              element={<NewProduct />}
            />
          </Route>

          <Route
            path="profile"
            element={<Profile />}
          >
            <Route
              path="login"
              element={<Login />}
            />
          </Route>
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
