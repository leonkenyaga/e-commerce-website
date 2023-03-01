import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Homepage from "./components/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route index element={<Homepage />} />
          <Route path="Home" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;