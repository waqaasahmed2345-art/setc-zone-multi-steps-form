import React from "react";

const BeneficialOwnerComponent = (props) => {
  const {
    index,
    applicant,
    handleCancel,
    handleNameChangeBeneficialOwners,
    renderFileInputOrURL,
    handleChangeSSN,
    toggle,
  } = props;

  return (
    <div
      key={index}
      style={{
        border: index > 0 ? "1px solid #c9c1c1" : "none",
        padding: index > 0 ? "15px" : "0px",
        borderRadius: index > 0 ? "15px" : "0px",
      }}
    >
      {index > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{ marginBottom: 12 }}
            className="beneficial-owner-btn"
            type="button"
            onClick={() => handleCancel(index)}
          >
            {toggle
              ? "Cerrar Propietario Beneficiario Adicional"
              : "Close Additional Beneficial Owner"}
          </button>
        </div>
      )}
      <p>
        {toggle ? (
          <>
            "COMPLETE EL BOI DEL PROPIETARIO BENEFICIOSO PARA TODOS Y CADA
            PROPIETARIO BENEFICIOSO DE LA COMPAÑÍA"
          </>
        ) : (
          <>
            "FILL OUT THE BENEFICIAL OWNER BOI FOR EACH AND EVERY BENEFICIAL
            OWNER OF THE COMPANY"
          </>
        )}
      </p>
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>{toggle ? "Nombre del individuo:" : "The individual’s Name:"}</p>
            <input
              type="text"
              id={`name${index}`}
              value={applicant.name}
              onChange={(e) =>
                handleNameChangeBeneficialOwners(index, "name", e)
              }
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>{toggle ? "Fecha de Nacimiento:" : "Date of Birth:"}</p>
            <input
              type="date"
              id={`dob${index}`}
              value={applicant.dob}
              onChange={(e) =>
                handleNameChangeBeneficialOwners(index, "dob", e)
              }
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-end">
          <div className="fieldss">
            <p>{toggle ? "Dirección Residencial:" : "Residential Address:"}</p>
            <input
              type="text"
              id={`address${index}`}
              value={applicant.address}
              onChange={(e) =>
                handleNameChangeBeneficialOwners(index, "address", e)
              }
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="fieldss">
            <p>
              {toggle
                ? "Número de licencia de conducir de EE. UU., tarjeta de identidad estatal, pasaporte de EE. UU.:"
                : "U.S. driver’s license, state identity card, U.S. passport identifying number:"}
            </p>
            <input
              type="text"
              id={`passportNum${index}`}
              value={applicant.passportNum}
              onChange={(e) =>
                handleNameChangeBeneficialOwners(index, "passportNum", e)
              }
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="fieldss">
            <p>
              {toggle
                ? 'Confirmar recepción de Imagen del frente de uno de los siguientes: (1) el frente del estado válido del individuolicencia de conducir, (2) tarjeta de identificación emitida por un estado, gobierno local o tribu, (3) páginas con fotografías delpasaporte estadounidense o extranjero válido del individuo.":'
                : "5. Confirm receipt of Image of front of one of the following: (1) the front of the individual’s valid state driver’s license, (2) ID card issued by a state, local government or tribe, (3) picture pages of the individual’s valid United States or foreign passport."}
            </p>
            <br />
            <div
              className="fileDiv"
              style={{
                display: "flex",
                justifyContent: "center",
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
                  {toggle
                    ? "Licencia de Conducir Anverso"
                    : "Driver's License Front"}
                </p>
                {renderFileInputOrURL(
                  index,
                  "driver_licence_front",
                  applicant.driver_licence_front,
                  applicant?.driver_licence_front_name
                )}
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
                  {toggle
                    ? "Licencia de Conducir Reverso"
                    : "Driver's License Back"}
                </p>
                {renderFileInputOrURL(
                  index,
                  "driver_licence_back",
                  applicant.driver_licence_back,
                  applicant?.driver_licence_back_name
                )}
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
              <div className="uploadFileDiv" style={{ marginRight: "0px" }}>
                <p
                  style={{
                    fontSize: 16,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontFamily: "fangsong",
                    color: "#4b4343",
                  }}
                >
                  {toggle
                    ? "Número de Seguro Social*"
                    : "Social Security Number*"}
                </p>
                <div style={{ width: "320px", marginTop: 5 }}>
                  <input
                    id={`securityKey${index}`}
                    key={`securityKey${index}`}
                    className="security-key"
                    type="text"
                    value={applicant.securityKey}
                    placeholder={toggle ? "xxxxx1234" : "xxxxx1234"}
                    maxLength={9}
                    onChange={(e) => handleChangeSSN(index, e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficialOwnerComponent;
