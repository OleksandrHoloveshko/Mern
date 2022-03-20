import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import './App.css';


const App = () => {
  return <>
    <BrowserRouter>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" exact element={<Users/>}/>
          <Route path="/:userId/places" exact element={<UserPlaces/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
}

export default App;
