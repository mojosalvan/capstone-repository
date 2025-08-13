import './index.css';
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
              <Route key={path} index element={element} className="text-3xl font-bold text-blue-500"/>
            ) : (
              <Route key={path} path={path} element={element} className="text-3xl font-bold text-blue-500"/>
            )
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
