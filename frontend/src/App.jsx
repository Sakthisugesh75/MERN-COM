import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Client Layout */}
        {/* Example */}
        {/* 
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<Dashboard />} />
        </Route> 
        */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;