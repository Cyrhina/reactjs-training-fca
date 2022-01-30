import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Classes from "./components/pages/classes/Classes";
import ClassesView from "./components/pages/classes/classes-action-view/ClassesView";
import Home from "./components/pages/home/Home";
import Setting from "./components/pages/setting/Setting";
import SettingClassLevel from "./components/pages/setting/settingclevel/SeetingClassLevel";
import SettingRole from "./components/pages/setting/settingrole/SettingRole";
import SettingRoom from "./components/pages/setting/settingroom/SettingRoom";
import SettingSection from "./components/pages/setting/settingsection/SettingSection";
import SettingSubject from "./components/pages/setting/settingsubject/SettingSubject";
import SettingTeacher from "./components/pages/setting/settingteacher/SettingTeacher";
import Student from "./components/pages/student/Student";
import StudentCreateNew from "./components/pages/student/StudentCreateNew";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/StudentCreateNew"
            element={<StudentCreateNew />}
          />
          <Route exact path="/Student" element={<Student />} />
          <Route exact path="/Classes" element={<Classes />} />
          <Route exact path="/ClassesView" element={<ClassesView />} />
          <Route exact path="/Setting" element={<Setting />} />
          <Route
            exact
            path="/SettingClassLevel"
            element={<SettingClassLevel />}
          />
          <Route exact path="/SettingTeacher" element={<SettingTeacher />} />
          <Route exact path="/SettingSection" element={<SettingSection />} />
          <Route exact path="/SettingRoom" element={<SettingRoom />} />
          <Route exact path="/SettingSubject" element={<SettingSubject />} />
          <Route exact path="/SettingRole" element={<SettingRole />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
