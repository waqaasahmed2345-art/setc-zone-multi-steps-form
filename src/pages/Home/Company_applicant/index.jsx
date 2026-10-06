/* eslint-disable */
import React, { useEffect } from "react";
import "../globalcss/style.css";
import logo from "../globalimages/logo.png";
import { useNavigate } from "react-router-dom";
import menuImage from "../globalimages/menu.png";
import circle_tick from "../globalimages/circle_tick.png";
import Switch from "react-switch";
import { ToggleContext } from "../../../ToggleContext";
import { useContext } from "react";

function index() {
  const Navigate = useNavigate();
  const { toggle, setToggle } = useContext(ToggleContext);

  function handleChange(checked) {
    setToggle(checked);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section class="navbar px-md-2">
        <nav class="navbar navbar-expand-lg fixed-top bg-light py-4">
          <div class="container">
            <div class="d-flex flex-row align-items-center">
              <a href="/">
                {" "}
                <img src={logo} className="logo_d" alt="" srcset="" />
              </a>
            </div>
            <li
              class="about nav-item d-lg-none d-md-block active"
              style={{ listStyle: "none" }}
            >
              <div className="d-flex align-items-center gap-2">
                {toggle && <p className="mb-0 fw-bold">English</p>}

                <Switch
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={(value) => setToggle(value)}
                  checked={toggle}
                />
                {!toggle && <p className="mb-0 fw-bold">Spanish</p>}
              </div>
            </li>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={menuImage} style={{ width: "20px", height: "20px" }} />
            </button>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasMenu"
              aria-labelledby="offcanvasMenuLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasMenuLabel">
                  <a class="navbar-brand" href="/">
                    <img src={logo} className="logo_d" alt="" srcset="" />
                  </a>
                </h5>

                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div class="offcanvas-body d-grid justify-content-end">
                <ul class="navbar-nav gap-2 me-auto">
                  <li class="about nav-item active me-1">
                    <a
                      className={
                        toggle
                          ? "font nav-link cool-link"
                          : "nav-link cool-link"
                      }
                      style={{ cursor: "pointer" }}
                      onClick={() => Navigate("/about_us")}
                    >
                      {toggle ? "Quiénes somos" : "About Us"}
                    </a>
                  </li>

                  <li class="about nav-item  me-1">
                    <a
                      className={
                        toggle
                          ? "font nav-link cool-link"
                          : "nav-link cool-link"
                      }
                      href="#faq"
                    >
                      {toggle ? "Preguntas frecuentes" : "FAQ`s"}
                    </a>
                  </li>

                  <li class="about nav-item  me-3">
                    <a
                      className={
                        toggle
                          ? "font nav-link cool-link"
                          : "nav-link cool-link"
                      }
                      href="mailto:admin@fincensafe.com"
                    >
                      {toggle ? "Contacte con nosotros" : "Contact Us"}
                    </a>
                  </li>

                  <li class="about nav-item active me-1">
                    <button
                      class="btn btn_start py-2"
                      onClick={() => Navigate("/getStarted")}
                    >
                      {toggle ? "Comenzar" : "Get Started"}
                    </button>
                  </li>
                  <li
                    class="about d-none d-lg-block nav-item active  ms-5"
                    style={{ listStyle: "none" }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      {toggle && <p className="mb-0 fw-bold">English</p>}
                      <Switch
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={(value) => setToggle(value)}
                        checked={toggle}
                      />
                      {!toggle && <p className="mb-0 fw-bold">Spanish</p>}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="reporting_inn">
        <div className="container">
          <div className="row">
            <h3>
              {toggle
                ? "Información del Solicitante de la Empresa:"
                : "Company Applicant Information:"}
            </h3>
          </div>
        </div>
      </section>

      <section className="reporting_inn_content">
        <div className="container">
          <div className="row">
            <div className="content">
              <h2>
                {toggle
                  ? "“Antes de su llamada programada de Zoom con nuestro experto de FinCenSafe, debe haber recopilado y tener a la mano la siguiente “Información de Propiedad Beneficiaria”:"
                  : "“Before your scheduled Zoom call with our FinCenSafe expert, you must have collected and have at your fingertips the following “Beneficial Ownership Information”:"}
              </h2>
              <div className="content_li">
                <h4>{toggle ? "BOI de la empresa:" : "Company BOI:"}</h4>
                <ul>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Nombre completo y cualquier nombre comercial (dba) de su empresa;"
                          : "Full name and any trade names (dba’s) of your company;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Dirección actual de la sede principal de su empresa (o sede en EE. UU.);"
                          : "Current street address of principal place of business (or U.S. headquarters) of your company;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Jurisdicción estatal de formación de su empresa;"
                          : "State jurisdiction of formation of your company;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Fecha de formación de su empresa;"
                          : "Date of formation of your company;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Número de identificación fiscal de su empresa"
                          : "Taxpayer Identification Number for your company"}
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="bg-cc">
                  <p>
                    {toggle
                      ? "Si su empresa se formó antes del 1 de enero de 2024, no tiene la obligación de presentar “Información de Propiedad Beneficiaria” para el individuo o individuos responsables de la presentación estatal que creó su empresa. Pero si su empresa se formó el 1 de enero de 2024 o después, consulte las páginas 34 y 35 de la Guía de Cumplimiento de FinCEN para obtener ayuda para determinar la identidad del solicitante de la empresa o solicitantes. En la mayoría de los casos, será un representante de la empresa (propietario o empleado) o el abogado de su empresa encargado de presentar la solicitud ante el Secretario de Estado en el estado donde se formó su empresa, y posiblemente también un asistente legal que lo hizo bajo la dirección del abogado de su empresa. En ese caso, tanto el abogado como el asistente legal serían considerados “Solicitantes de la Empresa” y se debe proporcionar información de propiedad beneficiaria sobre ambos."
                      : "If your company was formed prior to January 1, 2024, then you have no obligation to file “Beneficial Ownership Information” for the individual or individuals who were responsible for the state filing that created your company. But if your company was formed on or after January 1, 2024, please see Pages 34 and 35 of the FinCEN Compliance Guide for help in determining the identity of the company applicant or applicants. In most cases it will be either a company representative (owner or employee) or your company’s lawyer tasked with the job of filing with the Secretary of State in the state where your company was formed, and possibly a paralegal as well, who did so under the direction of your company’s lawyer. In that case both the lawyer and the paralegal would be considered “Company Applicants” and beneficial ownership information must be provided on both."}
                  </p>
                </div>
                <p className="my-3">
                  {toggle
                    ? "Si su empresa se formó el 1 de enero de 2024 o después, debe proporcionar la siguiente información para los solicitantes de la empresa:"
                    : "If your company was formed on or after January 1, 2024, you must provide the following information for the Company Applicant(s):"}
                </p>
                <ul>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "El nombre completo del individuo:"
                          : "The individual’s full name:"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "La fecha de nacimiento del individuo;"
                          : "The individual’s date of birth;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "La dirección residencial del individuo;"
                          : "The individual’s residential address;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Una copia en PDF de uno de los siguientes: (1) el frente de la licencia de conducir válida del estado del individuo, (2) tarjeta de identificación emitida por un estado, gobierno local o tribu, (3) páginas con foto del pasaporte válido del individuo de los Estados Unidos o extranjero."
                          : "A PDF copy of one of the following: (1) the front of the individual’s valid state driver’s license, (2) ID card issued by a state, local government or tribe, (3) picture pages of the individual’s valid United States or foreign passport."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer pb-3">
        <div>
          <div className="container d-flex flex-column align-items-center">
            <img
              src={logo}
              className="logo_d text-center mb-3"
              alt={toggle ? "Logo de la empresa" : "Company Logo"}
              srcSet=""
            />

            <p className="text-black">
              {toggle
                ? "221 South Olive Street Denver, CO"
                : "221 South Olive Street Denver, CO"}
            </p>

            <p>
              <a className="text-black" href="mailto:office@fincensafe.com">
                office@fincensafe.com
              </a>
            </p>

            <p className="text-black">
              <a href="tel:+80230-6947" className="text-black">
                80230-6947
              </a>
            </p>

            <p>
              <div
                onClick={() => Navigate("/privacy_policy")}
                className="text-black"
                style={{ cursor: "pointer" }}
              >
                {toggle
                  ? "2024 | Política de Privacidad"
                  : "2024 | Privacy Policy"}
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
