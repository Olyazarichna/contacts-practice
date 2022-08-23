import style from "./App.module.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { AddContactView } from "../pages/AddContactView";
import { HomeView } from "pages/HomeView";
function App() {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="add" element={<AddContactView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
