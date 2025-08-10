// App.jsx
import './App.css'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const navLinks = [
  { path: "/", name: "Home", element: <h1>Home</h1> },
  { path: "/about", name: "About", element: <h1>About</h1> },
  { path: "/menu", name: "Menu", element: <h1>Menu</h1> },
  { path: "/reservation", name: "Reservation", element: <h1>Reservation</h1> },
  { path: "/order-online", name: "Order Online", element: <h1>Order Online</h1> },
  { path: "/login", name: "Login", element: <h1>Login</h1> },
];

function App() {
  return (
    <>
      <Router>
        <Header navLinks={navLinks}/>
        <Routes>
          {navLinks.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer navLinks={navLinks}/>
      </Router>
    </>
  )
}
export default App;
