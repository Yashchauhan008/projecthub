import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing/landing";
import Navbar from "./navbar/navbar";
import Projectview from "./projectview/projectview";
import Layout from "./layout/layout";
import Explore from "./explore/explore";
import CodeBuddy from "./codebuddy/codebuddy";
import Element from "./element/element";
import Profile from "./profile/profile";
import Test from "./test component/test";
import Signup from "./signup/signup";
import Login from "./login/login";
import Signup1 from "./test component/test";
import Addproject from "./model crud/addproject";
import AdminHome from "./admin/adminHome";
import EditProject from "./model crud/editproject";
// import FileUploadForm from "../src/test component/"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/code-buddy" element={<CodeBuddy />}></Route>
        <Route path="/elements" element={<Element />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Projectview" element={<Projectview />}></Route>
        <Route path="/upload" element={<Addproject />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/edit-project/:id" component={EditProject} />{" "}
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
