import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Layout from "./components/shared/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
      </Route>
      <Route path="/login" element={<div>Login page</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
