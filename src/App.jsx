import './index.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './assets/pages/home';
import Intersection from './assets/pages/intersectionpage';
import Sequel from './assets/pages/sequelpage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intersection" element={<Intersection />} />
      <Route path="/sequel" element={<Sequel />} />
    </Routes>
  );
};

export default App;
