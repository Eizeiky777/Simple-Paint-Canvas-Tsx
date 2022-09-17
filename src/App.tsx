import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Painters } from "./main/painter";

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Painters />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
