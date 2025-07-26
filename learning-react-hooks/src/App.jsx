import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import ExtractAUseCounterHook from "./pages/ExtractAUseCounterHook";
import ExtractAUseCounterHookAfter from "./pages/ExtractAUseCounterHookAfter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/extract-a-use-counter-hook"
            element={<ExtractAUseCounterHook />}
          />
          <Route
            path="/extract-a-use-counter-hook-after"
            element={<ExtractAUseCounterHookAfter />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
