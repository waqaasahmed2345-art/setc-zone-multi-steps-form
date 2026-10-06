import React from "react";

const CompanyBoi = ({
  formData,
  errors,
  handleInputChange,
  handleNext,
  loader,
  toggle,
}) => {
  // Translation function to handle language switching
  const translate = (text) => {
    if (toggle) {
      // Spanish translations
      const translations = {
        "Full Name of the Company:": "Nombre Completo de la Empresa:",
        "Trade Name(s) of the Company:":
          "Nombre(s) Comercial(es) de la Empresa:",
        "Current Street Address of Principal Place of Business (or U.S. Headquarters, if applicable):":
          "Dirección Actual del Lugar Principal de Negocios (o la sede de EE. UU., si corresponde):",
        "State jurisdiction of formation or registration:":
          "Jurisdicción estatal de formación o registro:",
        "Date of Formation:": "Fecha de Formación:",
        "Taxpayer Identification Number:":
          "Número de Identificación del Contribuyente:",
        "COMPANY BOI": "COMPAÑÍA BOI",
      };
      return translations[text] || text;
    }
    // Default to English if toggle is false
    return text;
  };

  return (
    <div
      className="tab content-tab py-3"
      style={{
        marginBottom: "35",
        backgroundColor: "rgb(133 185 195 / 24%) ",
      }}
    >
      <h5
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#0097B2",
        }}
        className="text-center fs-4 font-weight-500 py-3"
      >
        {translate("COMPANY BOI")}
      </h5>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>{translate("Full Name of the Company:")}</p>
            <input
              type="text"
              value={formData.company_name}
              className={`${errors.company_name ? "border-danger" : ""}`}
              onChange={handleInputChange}
              name="company_name"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>{translate("Trade Name(s) of the Company:")}</p>
            <input
              type="text"
              value={formData.trade_name}
              className={`${errors.trade_name ? "border-danger" : ""}`}
              onChange={handleInputChange}
              name="trade_name"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="fieldss">
            <p>
              {translate(
                "Current Street Address of Principal Place of Business (or U.S. Headquarters, if applicable)"
              )}
            </p>
            <input
              type="text"
              value={formData.business_StAddress}
              className={`${errors.business_StAddress ? "border-danger" : ""}`}
              onChange={handleInputChange}
              name="business_StAddress"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="fieldss">
            <p>
              {translate("State jurisdiction of formation or registration:")}
            </p>
            <input
              type="text"
              value={formData.state_registration}
              className={`${errors.state_registration ? "border-danger" : ""}`}
              onChange={handleInputChange}
              name="state_registration"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>{translate("Date of Formation:")}</p>
            <input
              type="date"
              value={formData.date_of_formation}
              className={`${errors.date_of_formation ? "border-danger" : ""}`}
              onChange={handleInputChange}
              name="date_of_formation"
            />
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>{translate("Taxpayer Identification Number:")}</p>
            <input
              type="text"
              value={formData.taxpayer_idNum}
              className={`${errors.taxpayer_idNum ? "border-danger" : ""}`}
              onChange={handleInputChange}
              name="taxpayer_idNum"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBoi;
