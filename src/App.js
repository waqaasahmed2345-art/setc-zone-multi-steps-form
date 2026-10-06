import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";
import Return from "./AppForm/Strip/Return";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./Redux/Slices/userSlice";
import MainPage from "./pages/Home/Mainpage/index";
import TermsCondition from "./pages/Home/TermsCondition/Termsandcondition";
import About from "./pages/Home/Mainpage/About";
import Login from "./pages/Login/Login";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import { ToggleProvider } from "../src/ToggleContext";
import Reporting_page from "./pages/Home/Repoting_company_info";
import Each_beneficial from "./pages/Home/Each_beneficial_owner";
import Company_applicant from "./pages/Home/Company_applicant";

function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // If token exists in local storage, set it in component state
      setToken(storedToken);
      fetchUserData(storedToken);
    } else {
      // If token doesn't exist, remove it from component state
      setToken(null);
    }
  }, [token]); // Run this effect only on the initial mount

  const fetchUserData = async (token) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await fetch(
          "https://fincen.ccalerc.com/api/user/getUser",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          dispatch(setUserDetails({ fName: userData?.name }));
        } else {
          console.error(
            "Error fetching user data:",
            response.status,
            response.statusText
          );
        }
      } else {
        console.error("Token not found");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      // Hide the loader when the request is completed (either success or failure)
    }
  };

  return (
    <ToggleProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              token ? <Navigate to="/getStarted" /> : <Navigate to="/home" />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />

          <Route path="/getStarted" element={<ApplicationForm />} />
          <Route path="/privacy_policy" element={<TermsCondition />} />
          <Route path="/return" element={<Return />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/about_us" element={<About />} />
          <Route
            path="/Reporting_Company_Information"
            element={<Reporting_page />}
          />
          <Route path="/Each_beneficial_owner" element={<Each_beneficial />} />
          <Route path="/Company_applicant" element={<Company_applicant />} />
        </Routes>
      </Router>
    </ToggleProvider>
  );
}

export default App;
