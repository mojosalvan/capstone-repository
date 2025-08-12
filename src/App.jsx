// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import navLinks from './NavList';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navLinks.map(({ path, element }) =>
            path === "/" ? (
              <Route key={path} index element={element} />
            ) : (
              <Route key={path} path={path} element={element} />
            )
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
