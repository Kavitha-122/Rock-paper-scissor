import React, { useState } from "react";
import ChildComponent from "../../../dummy/dummy/src/home/ChildComponent";

function App() {
  const [themeColor, setThemeColor] = useState("lightblue");

  const toggleTheme = () => {
    setThemeColor((prev) =>
      prev === "lightblue" ? "lightcoral" : "lightblue"
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Theme Color Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ChildComponent color={themeColor} />
    </div>
  );
}

export default App;
