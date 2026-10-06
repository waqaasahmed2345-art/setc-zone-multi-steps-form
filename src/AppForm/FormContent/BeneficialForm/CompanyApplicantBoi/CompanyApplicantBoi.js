import React from "react";
import BeneficialOwnerInfo from "./components/BeneficialOwnerInfo";
import FileInput from "./components/FileInput";

const CompanyApplicantBoi = ({
  formData,
  errors,
  handleInputChange,
  handleFileChangeApplicant,
  handleViewSingleFile,
  fileLoader,
  ssn,
  handleChange,
  userData,
  errorApplicantMessage,
  toggle, // Toggle prop to switch languages
}) => {
  // Translation function to handle language switching
  const translate = (text) => {
    if (toggle) {
      // Spanish translations
      const translations = {
        "The Individual’s Name:": "Nombre del Individuo:",
        "Date of Birth:": "Fecha de Nacimiento:",
        "Residential Address:": "Dirección Residencial:",
        "U.S. driver’s license, state identity card, U.S. passport identifying number:":
          "Licencia de conducir de EE. UU., tarjeta de identidad estatal, número de pasaporte de EE. UU.:",
        "Confirm receipt of Image of front of one of the following: (1) the front of the individual’s valid state driver’s license, (2) ID card issued by a state, local government or tribe, (3) picture pages of the individual’s valid United States or foreign passport.":
          "Confirmar recepción de Imagen del frente de uno de los siguientes: (1) el frente del estado válido del individuolicencia de conducir, (2) tarjeta de identificación emitida por un estado, gobierno local o tribu, (3) páginas con fotografías delpasaporte estadounidense o extranjero válido del individuo.",
        "Driver's License Front": "Frente de la Licencia de Conducir",
        "Driver's License Back": "Reverso de la Licencia de Conducir",
        "Social Security Number*": "Número de Seguro Social*",
        xxxxx1234: "xxxxx1234",
      };
      return translations[text] || text;
    }
    // Default to English if toggle is false
    return text;
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <BeneficialOwnerInfo
            label={translate("The Individual’s Name:")}
            value={formData.applicant_name}
            name="applicant_name"
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <BeneficialOwnerInfo
            label={translate("Date of Birth:")}
            value={formData.applicant_dob}
            name="applicant_dob"
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <BeneficialOwnerInfo
            label={translate("Residential Address:")}
            value={formData.applicant_address}
            name="applicant_address"
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <BeneficialOwnerInfo
            label={translate(
              "U.S. driver’s license, state identity card, U.S. passport identifying number:"
            )}
            value={formData.applicant_passportNum}
            name="applicant_passportNum"
            errors={errors}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="fieldss">
            <p>
              {translate(
                "Confirm receipt of Image of front of one of the following: (1) the front of the individual’s valid state driver’s license, (2) ID card issued by a state, local government or tribe, (3) picture pages of the individual’s valid United States or foreign passport."
              )}
            </p>
            <div
              className="fileDiv"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <div style={{ marginRight: "25px" }}>
                <p
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontFamily: "fangsong",
                    color: "#4b4343",
                  }}
                >
                  {translate("Driver's License Front")}
                </p>
                <FileInput
                  value={userData?.driver_licence_front}
                  handleViewSingleFile={(e) =>
                    handleViewSingleFile(userData?.driver_licence_front, e)
                  }
                  handleFileChange={(e) =>
                    handleFileChangeApplicant(
                      "applicant_driver_licence_front",
                      e.target.files[0]
                    )
                  }
                  fileLoader={fileLoader}
                />
              </div>
              <div className="uploadFileDiv">
                <p
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontFamily: "fangsong",
                    color: "#4b4343",
                  }}
                >
                  {translate("Driver's License Back")}
                </p>
                <FileInput
                  value={userData?.driver_licence_back}
                  handleViewSingleFile={(e) =>
                    handleViewSingleFile(userData?.driver_licence_back, e)
                  }
                  handleFileChange={(e) =>
                    handleFileChangeApplicant(
                      "applicant_driver_licence_back",
                      e.target.files[0]
                    )
                  }
                  fileLoader={fileLoader}
                />
              </div>
            </div>
            <div
              className="fileDiv socialDiv"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: 10,
              }}
            >
              <div className="uploadFileDiv" style={{ marginRight: "25px" }}>
                <p
                  style={{
                    fontSize: 16,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontFamily: "fangsong",
                    color: "#4b4343",
                  }}
                >
                  {translate("Social Security Number*")}
                </p>
                <div style={{ width: "320px", marginTop: 5 }}>
                  <input
                    className={`security-key ${
                      errors.ssn ? "border-danger" : ""
                    }`}
                    type="text"
                    id={"ssn"}
                    value={ssn}
                    onChange={handleChange}
                    maxLength={9}
                    placeholder={translate("xxxxx1234")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {errorApplicantMessage && (
        <p style={{ color: "red" }}>{errorApplicantMessage}</p>
      )}
    </>
  );
};

export default CompanyApplicantBoi;
