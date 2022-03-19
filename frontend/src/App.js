import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import './App.css';

const App = () => {
  return <>
    <BrowserRouter>
      <MainNavigation/>
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
