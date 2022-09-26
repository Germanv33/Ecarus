import "./App.css";
import Form from "./pages/main/main";
import MarketPage from "./pages/market/market";
import MapPage from "./pages/map/map";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "mobx-react";
import store from "./stores/mainStore";

const App = () => (
  <Router>
    <Provider {...store}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Provider>
  </Router>
);

export default App;
