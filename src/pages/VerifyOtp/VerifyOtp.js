import React, { useEffect } from "react";

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import "./VerifyOtp.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setToken, setUserDetails } from "../../Redux/Slices/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import CommonSnackbar from "../../components/CommonSnackbar/CommonSnackbar";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { userEmail, userPhone } = location.state; // Destructure the state object to access variables

  const email = location.state?.userEmail; // Access state.userEmail instead of location.userEmail

  const [loading, setLoading] = useState(false);

  // State variables to manage OTP input, minutes, and seconds
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    // Function to handle the countdown logic
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000); // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]);

  // Function to resend OTP
  // const resendOTP = () => {
  //   setMinutes(1);
  //   setSeconds(30);
  // };

  const resendOTP = async (event) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://fincen.ccalerc.com/api/user/send-invitation",
        {
          email: email,
        }
      );

      if (response.status === 200) {
        const { data } = response;
        setLoading(false);
        setSnackbarOpen(true);
        setSnackbarSeverity("success");
        setSnackbarMessage("OTP sent successfully. Check your email.");

        setTimeout(() => {
          setMinutes(1);
          setSeconds(30);
        }, 1000);
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

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const dispatch = useDispatch();

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

  const handleToken = (token) => {
    localStorage.setItem("token", token);
    // const existingToken = localStorage.getItem('token');
    // if (!existingToken) {
    //   localStorage.setItem('token', token);
    // }
    dispatch(setToken(token));
  };
  const handleSubmitLink = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Hide the loader when the request is completed (either success or failure)

      const response = await axios.post(
        "https://fincen.ccalerc.com/api/user/verify",
        {
          otp: formData.email,
          email: email,
          // email: emailUser
        }
      );

      if (response.status === 200) {
        const { data } = response;
        // Set success message
        setSnackbarMessage("OTP verified successfully. Logged in.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        dispatch(setUserDetails({ fName: data?.user?.name }));
        // localStorage.setItem('loginTrue', loginTrue);

        handleToken(data.user.token);

        setTimeout(() => {
          navigate("/getStarted");
        }, 3000);

        // dispatch(createUser({ user: data.user }));
      } else {
        // Set error message
        setSnackbarMessage("Error verifying OTP. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Network error", error);
      // Set error message
      setSnackbarMessage("Error verifying OTP. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      // dispatch(loginFailure());
    } finally {
      setLoading(false); // Hide the loader when the request is completed (either success or failure)
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
              <h1>Verification</h1>
              {/* <h3 class="plain">Enter your Otp</h3> */}
            </div>

            <div class="text-center mb-5">
              <p
                style={{
                  fontSize: "14px",
                  color: "#a49a9a",

                  fontWeight: 500,
                  // background:
                  //   "linear-gradient(45deg, transparent, #c1ebf4, transparent)",
                  // fontStyle: "italic",
                }}
              >
                {/* <span style={{ color: "#e62e2d", fontWeight: "bold" }}>
                      Notice:{" "}
                    </span>{" "} */}
                Check your email inbox or the spam message for the verification
                code. If you fail to receive the code, please try{" "}
                <a
                  style={{
                    textDecoration: "underline",
                    color: "#29abe2",
                    fontWeight: 600,
                  }}
                  href="/login"
                >
                  log in
                </a>{" "}
                again or wait for it to resend.
              </p>
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
                      Enter your verification code
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="e.g. S-123456"
                      class="emailinput form-control"
                      required=""
                      id="id_email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>

                  <div className="countdown-text">
                    {/* Display countdown timer if seconds or minutes are greater than 0 */}

                    {seconds > 0 || minutes > 0 ? (
                      <p>
                        Time Remaining:{" "}
                        <span style={{ fontWeight: 600 }}>
                          {minutes < 10 ? `0${minutes}` : minutes}:
                          {seconds < 10 ? `0${seconds}` : seconds}
                        </span>
                      </p>
                    ) : (
                      // Display if countdown timer reaches 0
                      <p>Didn't receive code?</p>
                    )}

                    {/* Button to resend OTP */}
                    <button
                      disabled={seconds > 0 || minutes > 0}
                      style={{
                        color:
                          seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                      }}
                      onClick={resendOTP}
                    >
                      Resend OTP
                    </button>
                  </div>

                  {/* Button to submit OTP */}
                  <button
                    onClick={(e) => handleSubmitLink(e)}
                    className="submit-btn"
                  >
                    SUBMIT
                  </button>
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

export default VerifyOtp;
