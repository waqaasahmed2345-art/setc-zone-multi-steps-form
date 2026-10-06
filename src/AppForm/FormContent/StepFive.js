import React from "react";
import Confetti from "react-confetti";
import gifTick from "../images/gif-submit.gif";
import { ToggleContext } from "../../ToggleContext";
import { useContext, useEffect } from "react";

const StepFive = () => {
  const width = 800; // Set your desired width here
  const height = 600; // Set your desired height here
  const confettiStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    pointerEvents: "none",
  };

  const boxStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1500px",
    boxShadow: "0 0 5px 5px rgb(60 125 147 / 30%)",
    borderRadius: "8px",
    margin: "0 auto",
    padding: "130px 20px",
    display: "block",
  };

  const { toggle, setToggle } = useContext(ToggleContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://calendly.com/bill-williamhorourke";
    }, 1000); // 3000ms = 3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <form id="regForm" className="border-0" style={{ marginTop: "40px" }}>
            {/* <h1 id="register mt-3" style={{marginTop: 40, color: '#0097B2'}}>
            Thanks for your valuable information.
          </h1> */}

            <div style={boxStyle}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={gifTick}
                  style={{
                    width: "100px",
                    height: "100px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                />
              </div>
              <Confetti width={width} height={height} style={confettiStyle} />
              <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "#20A4BB" }}>
                  {toggle ? "Felicidades!" : "Congratulations!"}
                </h1>
                <h3 style={{ marginTop: 3 }}>
                  {toggle
                    ? "Su solicitud ha sido enviada"
                    : "Your application has been submitted"}
                </h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
