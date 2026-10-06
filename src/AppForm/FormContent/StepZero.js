import React, { useEffect } from "react";
import { Button } from "@mui/material";
import TermsAndConditionContent from "../TermsAndConditionContent";
import { useState } from "react";

const StepZero = ({
  formData,
  errors,
  handleInputChange,
  handleNext,
  loader,
  toggle,
  setFormData,
}) => {
  const [readStepZeroTerms, setReadStepZeroTerms] = useState(false);
  const [termsError, setTermsError] = useState("");

  useEffect(() => {
    if (readStepZeroTerms) {
      setTermsError("");
    }
  }, [readStepZeroTerms]);

  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <form id="regForm">
            <h4 id="register1"> {toggle ? "Empezar" : "Get Started"} </h4>

            <div
              className="tab content-tab1 py-3"
              style={{
                marginBottom: "35",
                backgroundColor: "#FFFFFF ",
              }}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="fieldss">
                    <p> {toggle ? "Nombre" : "Name"} </p>

                    <input
                      placeholder=""
                      value={formData.name}
                      className={`${errors.name ? "border-danger" : ""}`}
                      onChange={handleInputChange}
                      name="name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="fieldss">
                    <p> {toggle ? "Correo Electrónico" : "Email"} </p>

                    <input
                      placeholder="abc@gmail.com"
                      value={formData.email}
                      className={`${errors.email ? "border-danger" : ""}`}
                      onChange={handleInputChange}
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="fieldss">
                    <p> {toggle ? "Número de Teléfono" : "Phone Number"} </p>

                    <input
                      placeholder=""
                      value={formData.phone}
                      className={`${errors.email ? "border-danger" : ""}`}
                      onChange={handleInputChange}
                      name="phone"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="fieldss">
                    <p> {toggle ? "Nombre de Negocio" : "Business Name"} </p>

                    <input
                      placeholder=""
                      value={formData.businessName}
                      className={`${
                        errors.businessName ? "border-danger" : ""
                      }`}
                      onChange={handleInputChange}
                      name="businessName"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="fieldss">
                    <p>
                      {" "}
                      {toggle
                        ? "Dirección de Negocio"
                        : "Business Address"}{" "}
                    </p>

                    <input
                      type="text"
                      value={formData.company_name}
                      className={`${
                        errors.company_name ? "border-danger" : ""
                      }`}
                      onChange={handleInputChange}
                      name="company_name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="fieldss">
                    <p>
                      {" "}
                      {toggle
                        ? "¿Cómo supiste de nosotros?"
                        : "How did you hear about us?"}{" "}
                    </p>

                    <input
                      placeholder=""
                      value={formData.businessAddress}
                      className={`${
                        errors.businessAddress ? "border-danger" : ""
                      }`}
                      onChange={handleInputChange}
                      name="businessAddress"
                    />
                  </div>
                </div>
              </div>
              <p
                className="confirmation-check"
                style={{
                  border: errors.isCheckedLeadCapture
                    ? "1px solid rgb(230 131 108)"
                    : "none",
                  alignItems: "center",
                }}
              >
                <input
                  style={{ fontSize: 20, border: "1px solid gray" }}
                  checked={formData.isCheckedLeadCapture}
                  class={` form-check-input me-1 mt-1 ${
                    errors.isCheckedLeadCapture ? "border-danger" : ""
                  }`}
                  type="checkbox"
                  name="isCheckedLeadCapture"
                  onChange={
                    readStepZeroTerms
                      ? handleInputChange
                      : () =>
                          setTermsError("Please Read the terms and condition")
                  }
                />
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                  }}
                >
                  {" "}
                  {toggle
                    ? "Por favor haga clic y lea los "
                    : "Please click and read the "}
                  <a
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1188F7",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal_step_19"
                  >
                    {toggle ? "Términos y condiciones" : "Terms and conditions"}
                  </a>
                </span>
              </p>
              <span style={{ color: "red" }}>{termsError}</span>

              <p
                className="confirmation-check"
                style={{
                  border: errors.isCompanyFormed
                    ? "1px solid rgb(230 131 108) "
                    : "none",
                  alignItems: "center",
                }}
              >
                <input
                  style={{ fontSize: 20, border: "1px solid gray" }}
                  // style={{ fontSize: 20, border: "1px solid gray" }}
                  checked={formData.isCompanyFormed}
                  class={` form-check-input me-1 mt-1 ${
                    errors.isCompanyFormed ? "border-danger" : ""
                  }`}
                  type="checkbox"
                  name="isCompanyFormed"
                  onChange={handleInputChange}
                />
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                  }}
                >
                  {" "}
                  {toggle
                    ? "Mi empresa fue formada para obtener ganancias"
                    : "My company was formed to make a profit"}{" "}
                </span>
              </p>
              {/* {errors.isCompanyFormed && (
                    <div
                      className="text-danger"
                      style={{ fontSize: "18px", fontWeight: 600 }}
                    >
                      {errors.isCompanyFormed}
                    </div>
                  )} */}

              <p
                className="confirmation-check"
                style={{
                  border: errors.isNoMoreBeneficials
                    ? "1px solid rgb(230 131 108) "
                    : "none",
                  alignItems: "center",
                }}
              >
                <input
                  style={{ fontSize: 20, border: "1px solid gray" }}
                  checked={formData.isNoMoreBeneficials}
                  class={` form-check-input me-1 mt-1 ${
                    errors.isNoMoreBeneficials ? "border-danger" : ""
                  }`}
                  type="checkbox"
                  name="isNoMoreBeneficials"
                  onChange={handleInputChange}
                />
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                  }}
                >
                  {" "}
                  {toggle
                    ? "Tengo menos de nueve (9) Propietarios Beneficiarios"
                    : "I have less than nine (9) Beneficial Owners"}{" "}
                </span>
              </p>

              {errors.isCheckedLeadCapture && (
                <div
                  className="text-danger"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {errors.isCheckedLeadCapture}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                <Button
                  variant="contained"
                  disabled={loader}
                  style={{
                    padding: "10px 60px", // Adjust padding as needed
                    backgroundColor: "#FF5C36", // Change the background color as needed
                  }}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal_step_19"
              style={{
                display: "none",
                // padding: "0px 40px 20px 40px",
              }}
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div
                    class="modal-header text-white"
                    style={{ backgroundColor: "#0097B2 " }}
                  >
                    <h5
                      class="modal-title"
                      style={{ color: "white", marginLeft: 15 }}
                    >
                      <i
                        class="fas fa-check-circle"
                        style={{ color: "white" }}
                      ></i>{" "}
                      FinCENsafe TERMS AND CONDITIONS
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <TermsAndConditionContent
                    readStepZeroTerms={readStepZeroTerms}
                    setReadStepZeroTerms={setReadStepZeroTerms}
                    setFormData={setFormData}
                    formData={formData}
                  />
                </div>
              </div>
            </div>

            {/* <div class="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" class="mb-4"/>
                    <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepZero;
