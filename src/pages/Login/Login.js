import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import CommonSnackbar from "../../components/CommonSnackbar/CommonSnackbar";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const inputValue = value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSendLink = async (event) => {
    event.preventDefault();

    // navigate("/verifyOtp", { state: { userEmail: formData?.email, userPhone: formData?.phone }});

    if (!formData.email) {
      setSnackbarMessage("Please enter valid email");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://fincen.ccalerc.com/api/user/send-invitation",
        {
          email: formData.email,
        }
      );

      if (response.status === 200) {
        const { data } = response;
        setLoading(false);
        setSnackbarOpen(true);
        setSnackbarSeverity("success");
        setSnackbarMessage("OTP sent successfully. Check your email.");

        setTimeout(() => {
          navigate("/verifyOtp", { state: { userEmail: formData?.email } });
          // history.push({
          //   pathname: "/verifyOtp",
          //   search: `?userEmail=${formData?.email}`
          // });
        }, 3000);
      } else {
        console.error("Error in API call");
        setSnackbarMessage(
          "Something went wrong. Please check your email & try again."
        );
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Network error", error);
      setSnackbarMessage(
        "Something went wrong. Please check your email & try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {loading && <LoadingScreen />}

      <section class="login-form">
        <div class="d-flex justify-content-center container my-5 py-3">
          <div class="base-container-small">
            <div class="text-center mb-5">
              <h1>Login</h1>
              <h3 class="plain mt-3">
                Enter your email and we’ll send you a link
              </h3>
            </div>
            <div class="d-flex flex-column align-items-center">
              <div class="base-container-small">
                <form>
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="ASdGk4wSUlaBRxh0UX64RBZFGkuWcHvNgv7ySAQUw9RG33qP0SLLTapgvk4dxHOz"
                  />
                  <div id="div_id_email" class="mb-3">
                    <label
                      for="id_email"
                      class="form-label requiredField"
                      style={{ fontWeight: 600 }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. example@example.com"
                      class="emailinput form-control"
                      required=""
                      id="id_email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                  <div class="text-end mt-4">
                    <button
                      onClick={handleSendLink}
                      type="submit"
                      className="submit-btn"
                      id="submit-button"
                    >
                      Send Otp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommonSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        handleClose={handleSnackbarClose}
        autoHideDuration={6000} // You can customize this value
      />
    </div>
  );
};

export default Login;
