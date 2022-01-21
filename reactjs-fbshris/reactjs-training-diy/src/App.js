import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Student from "./components/pages/student/Student";
import StudentCreateNew from "./components/pages/student/StudentCreateNew";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentCreateNew />} />
          <Route exact path="/Student" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
