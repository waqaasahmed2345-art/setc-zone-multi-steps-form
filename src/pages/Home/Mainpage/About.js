/*eslint-disable*/
import React from "react";
import "../globalcss/style.css";
import logo from "../globalimages/logo.png";
import about_img from "../globalimages/about_img.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Switch from "react-switch";
import { useContext } from "react";
import { ToggleContext } from "../../../ToggleContext";
import menuImage from "../globalimages/menu.png";

const About = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("/getStarted");
  };

  return (
    <div>
      <section className="navbar px-md-2">
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
                      onClick={() => navigate("/about_us")}
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
                      onClick={() => navigate("/getStarted")}
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
      <section className="about_us">
        <div className="container">
          <div
            className="bg_about p-5"
            style={{ backgroundColor: "rgba(0, 151, 178, 1)" }}
          >
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <img src={about_img} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <div className="cone_about">
                  <h2 style={{ color: "rgba(255, 92, 54, 1)" }}>
                    {toggle ? "SOBRE NOSOTROS" : "ABOUT US"}
                  </h2>
                  <p>
                    {toggle
                      ? "FinCEN Safe es propiedad y está representado por William H. O’Rourke, Esq. de William H. O’Rourke, P.C., una corporación profesional de Colorado."
                      : "FinCEN Safe is owned and represented by William H. O’Rourke, Esq. of William H. O’Rourke, P.C., a Colorado professional corporation."}
                  </p>
                  <p>
                    {toggle
                      ? "El Sr. O’Rourke es un abogado comercial y transaccional con licencia en Colorado con más de 40 años de experiencia en transacciones comerciales. El Sr. O’Rourke y su personal paralegal profesional son expertos en entender, implementar y completar la presentación con la Red de Aplicación de Crímenes Financieros de la “información de interés de propiedad beneficiaria requerida por la Ley de Transparencia Corporativa para “empresas informantes” y todas las"
                      : "Mr. O’Rourke is a Colorado-licensed business and transactional lawyer with over 40 years of commercial transactional experience. Mr. O’Rourke and his professional paralegal staff are experts in understanding, implementing and completing the filing with the Financial Crimes Enforcement Network of the “beneficial ownership interest information required by the Corporate Transparency Act for “reporting companies” and all "}
                    <span style={{ color: "rgba(255, 92, 54, 1)" }}></span>
                    {toggle
                      ? "de esas empresas informantes"
                      : "of such reporting companies"}
                  </p>
                  <p>
                    {toggle
                      ? "Para obtener más información sobre Willian H. O’Rourke, P.C., visite su sitio web en"
                      : "For more information on Willian H. O’Rourke, P.C. visit its website at"}
                    <span>
                      <a
                        className="fw-bold text-center ps-2"
                        href="https://www.williamhorourke.com/"
                        style={{ color: "rgba(255, 92, 54, 1)" }}
                      >
                        www.williamhorourke.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer pb-3">
        <div>
          <div className="container d-flex flex-column align-items-center">
            <img src={logo} className="logo_d text-center mb-3" alt="" />
            <p className="text-black">221 South Olive Street Denver, CO</p>
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
              <div>
                <a
                  className="text-black"
                  href="/privacy_policy"
                  style={{ cursor: "pointer" }}
                >
                  {toggle
                    ? "2024 | Política de Privacidad"
                    : "2024 | Privacy Policy"}
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
