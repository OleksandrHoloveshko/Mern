import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import './App.css';

const App = () => {
  return <>
    <BrowserRouter>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" exact element={<Users/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
}

export default App;
