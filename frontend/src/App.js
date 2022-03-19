import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

const App = () => {
  return <>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" exact/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
}

export default App;
