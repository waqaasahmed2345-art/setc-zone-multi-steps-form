/* eslint-disable */
import React, { useEffect } from "react";
// import React from "react";
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
            <h3 className={toggle ? "font" : ""}>
              {toggle
                ? "Información de la Empresa Informante:"
                : "Reporting Company Information:"}
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
                  ? "“Antes de su llamada programada por Zoom con nuestro experto de FinCenSafe, debe haber recopilado y tener a su disposición la siguiente “Información de Propiedad Beneficiaria”:"
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
                          ? "Nombre completo y cualquier nombre comercial (dba’s) de su empresa;"
                          : "Full name and any trade names (dba’s) of your company;"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={circle_tick} alt="" />
                      <p className="mb-0">
                        {toggle
                          ? "Dirección actual de la sede principal (o sede en EE.UU.) de su empresa;"
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
                          ? "Número de Identificación del Contribuyente de su empresa"
                          : "Taxpayer Identification Number for your company"}
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
