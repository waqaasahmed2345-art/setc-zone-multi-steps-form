/* eslint-disable */
import React from "react";
import "../globalcss/style.css";
import section_3 from "../globalimages/3rd_banner_img.jpg";
import logo from "../globalimages/logo.png";
import img_card_1 from "../globalimages/owner_card_img1.png";
import img_card_2 from "../globalimages/owner_card_img2.png";
import img_card_3 from "../globalimages/owner_card_img3.png";
import img_card_4 from "../globalimages/owner_card_img14.png";
import boi_img from "../globalimages/boi_img.png";
import section_3_4 from "../globalimages/4th_banner.jpg";
import r_icon1 from "../globalimages/reporting_company.png";
import r_icon2 from "../globalimages/each_benf.png";
import r_icon3 from "../globalimages/comapny_applicant.png";
import arrow from "../globalimages/arrow.png";
import r_icon5 from "../globalimages/ricon5.png";
import { useNavigate } from "react-router-dom";
import menuImage from "../globalimages/menu.png";
import { Typography } from "@mui/material";
import Switch from "react-switch";
import { useState } from "react";
import { ToggleContext } from "../../../ToggleContext";
import { useContext } from "react";

function index() {
  const Navigate = useNavigate();
  const { toggle, setToggle } = useContext(ToggleContext);

  function handleChange(checked) {
    setToggle(checked);
  }

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
      <section class="pt-md-5 banner">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8 col-md-10 col-sm-12 mt-5">
              <h1 class="banner-title text-center">
                {toggle ? (
                  <h1>
                    Por sólo <span>$150.00</span>, deje que FinCenSafe se
                    encargue de su declaración obligatoria.
                  </h1>
                ) : (
                  <h1>
                    For only <span>$150.00</span>, let FinCenSafe take the guess
                    work out of your required filing.
                  </h1>
                )}
              </h1>
              <div className="d-flex justify-content-center mt-2">
                <button
                  class="btn_boi mt-3"
                  onClick={() => Navigate("/getStarted")}
                >
                  {toggle ? "Presentar mi informe" : "File My Report"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="section_benficial" id="About">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12">
              <div class="d-flex justify-content-center">
                <h1 class="sect2_h1 text-center fw-bold">
                  {toggle ? (
                    <h1>
                      ¿Por qué usar FinCenSafe para presentar un{" "}
                      <span>Informe de Información </span>de Propiedad
                      Beneficiaria?
                    </h1>
                  ) : (
                    <h1>
                      Why use FinCenSafe to file a{" "}
                      <span>Beneficial Ownership </span>Information Report?
                    </h1>
                  )}
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card1 shadow">
                <img src={b_icon1} alt="" srcset="" />
                <h4 className=" fw-bold">
                  {toggle ? "Cumpla la normativa" : "Be Compliant"}
                </h4>
                <p>
                  {toggle
                    ? "Cumplamos el mandato de la Ley de Transparencia Empresarial y gestionemos la presentación de los datos de propiedad a la Red para la represión de los delitos financieros (FinCEN)."
                    : ` Let us fulfill the mandate of the Corporate Transparency Act.
                    We'll manage the submission of the ownership details to the
                    Financial Crimes Enforcement Network (FinCEN).`}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card2 shadow">
                <img src={b_icon2} alt="" srcSet="" />
                <h4 className=" fw-bold">
                  {toggle ? "Presentación Precisa" : "Accurate Filing"}
                </h4>
                <p className="">
                  {toggle
                    ? `Descanse tranquilo sabiendo que su presentación es precisa y cumple con las normativas. 
                 Cubriremos todos los detalles necesarios exigidos por FinCEN y las últimas regulaciones. 
                 Además, recibirá una confirmación una vez que el informe haya sido enviado con éxito.`
                    : `Rest at Ease knowing your filing is precise and compliant. 
                 We'll cover all the necessary details mandated by FinCEN and the latest regulations. 
                 Additionally, you'll receive confirmation once the report is successfully submitted.`}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card3 shadow">
                <img src={b_icon3} alt="" srcSet="" />
                <h4 className=" fw-bold">
                  {toggle ? "Proceso Sencillo" : "Easy Process"}
                </h4>
                <p className="">
                  {toggle ? (
                    <>
                      FinCenSafe simplifica su proceso al evitar que tenga que
                      navegar por las complejidades de una nueva ley federal.
                      Déjenos hacer el trabajo pesado. Nuestra tarifa de
                      presentación es de <strong>$150</strong>. El proceso de
                      FincenSafe es un sistema de presentación de informes
                      rápido y sencillo que maneja todo, asegurando que su
                      presentación cumpla completamente con las especificaciones
                      de la Ley de Transparencia Corporativa.
                    </>
                  ) : (
                    <>
                      FinCenSafe streamlines your process by having you avoid
                      navigating the intricacies of a new federal law. Let us do
                      the heavy lifting. Our filing fee is <strong>$150</strong>
                      . FincenSafe’s process is a swift and straightforward
                      report filing system which handles everything, ensuring
                      your submission fully complies with the Corporate
                      Transparency Act's specifications.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card3 shadow">
                <img src={b_icon4} alt="" srcSet="" />
                <h4 className=" fw-bold">
                  {toggle
                    ? "Presentación en tiempo real con un experto de FinCenSafe"
                    : "Real Time Filing with a FinCenSafe Expert"}
                </h4>
                <p className="">
                  {toggle ? (
                    <>
                      Una vez que comience el proceso de presentación haciendo
                      clic en el botón “Comenzar”, accederá a un calendario en
                      línea desde el cual luego elegirá una fecha y hora en la
                      que un experto de FinCenSafe coordinará con usted una
                      videollamada de Zoom y lo “guiará”. a través del proceso
                      de acceso al sitio web{" "}
                      <a href="https://fincen.gov/">fincen.gov</a> y la
                      presentación exitosa del “Informe de información sobre
                      beneficiarios reales” de su empresa.
                    </>
                  ) : (
                    <>
                      Once you start the filing process by clicking the “Get
                      Started” Button, you will access an online calendar from
                      which you will then choose a date and time at which a
                      FinCenSafe expert will coordinate with you on a Zoom video
                      call and will “walk you through” the process of accessing
                      the <a href="https://fincen.gov/">fincen.gov</a> website
                      and successfully filing the “Beneficial Ownership
                      Information Report” on your company.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="w-100 text-center">
              <button class="btn_boi my-4 ms-3">File My Report</button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="beneficial_ownershipp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <h1>
                {toggle
                  ? "¿Por qué usar FinCenSafe para presentar un "
                  : "Why use FinCenSafe to file a "}
                <span>
                  {toggle
                    ? "Informe de Información de Propiedad Beneficiosa"
                    : "Beneficial Ownership"}
                </span>{" "}
                {toggle ? "?" : "Information Report?"}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="owner_crd owner_crd1 shadow">
                <div className="ifem">
                  <img src={img_card_1} className="img-fluid" />
                </div>
                <h4>{toggle ? "Presentación Precisa" : "Accurate Filing"}</h4>
                <p>
                  {toggle
                    ? "Descanse sabiendo que su presentación es precisa y cumple con las normativas. Cubriremos todos los detalles necesarios exigidos por FinCEN y las últimas regulaciones. Además, recibirá confirmación una vez que el informe se haya enviado con éxito."
                    : "Rest at Ease knowing your filing is precise and compliant. We'll cover all the necessary details mandated by FinCEN and the latest regulations. Additionally, you'll receive confirmation once the report is successfully submitted."}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="owner_crd owner_crd2 shadow">
                <div className="ifem">
                  <img src={img_card_2} className="img-fluid" />
                </div>
                <h4>{toggle ? "Cumpla con las Normas" : "Be Compliant"}</h4>

                <p>
                  {toggle
                    ? "Permítanos cumplir con el mandato de la Ley de Transparencia Corporativa. Nos encargaremos de la presentación de los detalles de la propiedad a la Red de Control de Delitos Financieros (FinCEN)."
                    : "Let us fulfill the mandate of the Corporate Transparency Act. We'll manage the submission of the ownership details to the Financial Crimes Enforcement Network (FinCEN)."}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="owner_crd owner_crd3 shadow">
                <div className="ifem">
                  <img src={img_card_3} className="img-fluid" />
                </div>
                <h4>{toggle ? "Proceso Fácil" : "Easy Process"}</h4>
                <p>
                  {toggle
                    ? "FinCenSafe simplifica su proceso evitando que tenga que navegar por las complejidades de una nueva ley federal. Déjenos hacer el trabajo pesado. Nuestra tarifa de presentación es de $150. El proceso de FincenSafe es un sistema rápido y sencillo de presentación de informes que maneja todo, asegurando que su presentación cumpla completamente con las especificaciones de la Ley de Transparencia Corporativa."
                    : "FinCenSafe streamlines your process by having you avoid navigating the intricacies of a new federal law. Let us do the heavy lifting. Our filing fee is $150. FincenSafe’s process is a swift and straightforward report filing system which handles everything, ensuring your submission fully complies with the Corporate Transparency Act's specifications."}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="owner_crd owner_crd4 shadow">
                <div className="ifem">
                  <img src={img_card_4} className="img-fluid" />
                </div>
                <h4>
                  {toggle
                    ? "Presentación en Tiempo Real con un Experto de FinCenSafe:"
                    : "Real Time Filing with a FinCenSafe Expert:"}
                </h4>
                <p>
                  {toggle
                    ? 'Una vez que inicie el proceso de presentación haciendo clic en el botón "Comenzar", accederá a un calendario en línea desde el cual luego elegirá una fecha y hora en la que un experto de FinCenSafe se coordinará con usted en una videollamada de Zoom y lo "guiará" a través del proceso de acceso al sitio web fincen.gov y de presentación exitosa del "Informe de Información de Propiedad Beneficiosa" sobre su empresa.'
                    : "Once you start the filing process by clicking the “Get Started” Button, you will access an online calendar from which you will then choose a date and time at which a FinCenSafe expert will coordinate with you on a Zoom video call and will “walk you through” the process of accessing the fincen.gov website and successfully filing the “Beneficial Ownership Information Report” on your company."}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="btn owner_btnn"
              onClick={() => Navigate("/getStarted")}
            >
              {toggle ? "Presentar mi informe" : "File my report"}
            </a>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="reporting">
          <div className="container">
            <h2 className="rh2">
              {toggle ? "¿Qué es" : "What is"} <span>FinCEN REPORTING?</span>
            </h2>
            <p className="rp">
              {toggle
                ? `La Red de Ejecución de Crímenes Financieros (FinCEN) es un organismo regulador del Departamento del Tesoro de los Estados Unidos 
                    que protege el sistema financiero contra el uso ilegal, combatiendo así el lavado de dinero y la financiación del terrorismo. 
                    Las empresas que informan deben proporcionar lo siguiente:`
                : `The Financial Crimes Enforcement Network (FinCEN) is a regulatory body of the United States Treasury Department that safeguards 
                    the financial system from illegal use, thus combating money laundering and the financing of terrorism. Reporting companies must 
                    provide the following:`}
            </p>

            <div className="rppp">
              <div className="row justify-content-center  ">
                <div className=" col-lg-4 col-md-6 col-sm-6 ">
                  <div className="rcard rcard1">
                    <div className="crd_head">
                      <a
                        onClick={() =>
                          Navigate("/Reporting_Company_Information")
                        }
                      >
                        <img src={arrow} className="imgg" alt="" />
                      </a>
                    </div>
                    <div className="crd_body">
                      <div className="imm">
                        <img src={r_icon1} className="im" alt="" />
                      </div>
                      <p>
                        {toggle
                          ? "Información de la empresa que presenta informes"
                          : "Reporting Company Information "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6 ">
                  <div className="rcard">
                    <div className="crd_head">
                      <a>
                        <img
                          onClick={() => Navigate("/Each_beneficial_owner")}
                          src={arrow}
                          className="imgg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="crd_body">
                      <div className="imm">
                        <img src={r_icon2} className="im" alt="" />
                      </div>
                      <p>
                        {toggle
                          ? "Información de cada propietario beneficiario"
                          : "Each Beneficial Owner Information"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6 ">
                  <div className="rcard rcard1">
                    <div className="crd_head">
                      <a onClick={() => Navigate("/Company_applicant")}>
                        <img src={arrow} className="imgg" alt="" />
                      </a>
                    </div>
                    <div className="crd_body">
                      <div className="imm">
                        <img src={r_icon1} className="im" alt="" />
                      </div>
                      <p>
                        {toggle
                          ? "Información del solicitante de la empresa"
                          : "Company Applicant Information"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-100 text-center">
                  <button
                    class="btn_boi my-4 ms-3"
                    onClick={() => Navigate("/getStarted")}
                  >
                    File My Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bio">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="bio_content py-4">
                <h2 className="fw-bold">
                  {toggle ? (
                    <>
                      Informes FinCEN <span>“BOI”</span>
                    </>
                  ) : (
                    <>
                      FinCEN Reporting <span>“BOI”</span>
                    </>
                  )}
                </h2>
                <p>
                  {toggle
                    ? "Para combatir el lavado de dinero y la financiación del terrorismo y otros delitos financieros, casi todas las pequeñas empresas propiedad de una entidad ahora están obligadas a presentar su “información sobre la propiedad efectiva (“BOI”) a la Red de Ejecución de Delitos Financieros (FinCEN)."
                    : "In order to combat money laundering and terrorist financing and other financial crimes, almost every small business owned in an entity form is now required to file their “beneficial ownership information (“BOI”) with the Financial Crimes Enforcement Network (FinCEN)."}
                </p>

                <button
                  className="btn_boi mt-3"
                  onClick={() => Navigate("/getStarted")}
                >
                  {toggle ? "Presentar mi informe" : "File My Report"}
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <img
                  src={boi_img}
                  className="img-fluid text-center"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="py-5 px-md-3">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-5">
                <div className="d-flex justify-content-center">
                  <img src={section_3} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <h3>
                  {toggle
                    ? "¿Está mi Empresa Obligada a Presentar un Informe de Información de Propiedad Beneficiaria (BOI)?"
                    : "Is my Business Required to File A Beneficial Ownership Information Report (BOI)?"}
                </h3>
                <ul>
                  <li>
                    {toggle
                      ? "Las entidades obligadas a informar bajo esta regulación incluyen corporaciones, compañías de responsabilidad limitada, s-corps, sociedades limitadas y otras entidades creadas al presentar un documento ante cualquier estado de EE. UU."
                      : "Entities required to report under this regulation include corporations, limited liability companies, s-corps, Limited Partnerships, and other entities created by filing a document with any U.S. State."}
                  </li>
                  <li>
                    {toggle ? (
                      <>
                        La mayoría de las entidades comerciales con fines de
                        lucro deberán presentar este informe a menos que
                        califiquen para una exención. Puede averiguar fácilmente
                        si tiene una exención
                        <a
                          href="https://www.fincen.gov/boi-faqs#C_1"
                          target="_blank"
                        >
                          {" "}
                          aquí.
                        </a>
                        `
                      </>
                    ) : (
                      <>
                        The majority of for-profit business entities will be
                        required to file this report unless they qualify for an
                        exemption. You can easily find out if you have an
                        exemption
                        <a
                          href="https://www.fincen.gov/boi-faqs#C_1"
                          target="_blank"
                        >
                          {" "}
                          here.
                        </a>
                      </>
                    )}
                  </li>
                </ul>
                <button
                  className="btn_boi mt-3 ms-3"
                  onClick={() => Navigate("/getStarted")}
                >
                  {toggle ? "Presentar Mi Informe" : "File My Report"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="affected">
            <h2 className="fh2">
              {toggle ? (
                <>
                  ¿QUIÉN ESTÁ <span>AFECTADO?</span>
                </>
              ) : (
                <>
                  WHO IS <span>AFFECTED?</span>
                </>
              )}
            </h2>
            <p className="fp mb-3">
              {toggle
                ? "Las entidades obligadas a informar bajo esta regulación incluyen"
                : "Entities required to report under this regulation include"}
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row justify-content-center row-gap-3">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="crd cardd1">
                      <p>{toggle ? "Corporaciones" : "Corporations"}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="crd cardd2">
                      <p>
                        {toggle
                          ? "Compañías de responsabilidad limitada"
                          : "Limited liability companies"}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="crd cardd3">
                      <p>{toggle ? "S-corps" : "S-corps"}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="crd cardd4">
                      <p>
                        {toggle
                          ? "Sociedades limitadas"
                          : "Limited Partnerships"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mid_banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h2>
                {toggle ? (
                  <>
                    El incumplimiento de la presentación a tiempo puede resultar
                    en multas de <span> $500.00</span> por día y posible
                    encarcelamiento.
                  </>
                ) : (
                  <>
                    Failure to file in a timely manner can result in fines of{" "}
                    <span> $500.00</span> per day and possible imprisonment.
                  </>
                )}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section3 sad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h2>
                {toggle ? (
                  <>
                    ¿Cuáles son los <span>plazos de presentación</span>?
                  </>
                ) : (
                  <>
                    What Are The <span>Filing Deadlines</span>?
                  </>
                )}
              </h2>
              <ul>
                <li className="mt-4 d-flex">
                  <div>
                    <i className="fa-solid fa-circle me-2"></i>
                  </div>
                  {toggle
                    ? "Las entidades creadas antes del 1 de enero de 2024 tendrán hasta el 1 de enero de 2025 para presentar el informe."
                    : "Entities created before Jan. 1, 2024, will have until Jan. 1, 2025 to submit the report."}
                </li>
                <li className="d-flex">
                  <div>
                    <i className="fa-solid fa-circle me-2"></i>
                  </div>
                  {toggle
                    ? "Las entidades creadas a partir del 1 de enero de 2024 y antes del 1 de enero de 2025 tendrán 90 días desde la creación o el registro para presentar el informe."
                    : "Entities created on or after January 1, 2024 and before Jan 1, 2025, will have 90 days from creation or registration to submit the report."}
                </li>
                <li className="d-flex">
                  <div>
                    <i className="fa-solid fa-circle me-2"></i>
                  </div>
                  {toggle
                    ? "Las entidades creadas a partir del 1 de enero de 2025 tendrán 30 días desde la creación o el registro para presentar el informe. Todas las “empresas informantes” deben actualizar su BOI con FinCEN dentro de los 30 días posteriores a cualquier cambio."
                    : "Entities created on or after Jan. 1, 2025, will have 30 days from creation or registration to submit the report. All “reporting companies” are required to update their BOI with FinCEN within 30 days of any changes."}
                </li>
                <p className="fw-semibold">
                  {toggle
                    ? "Cualquier cambio en el BOI de una empresa informante debe ser presentado a FINCEN dentro de los 30 días posteriores a dicho cambio."
                    : "Any change in the BOI of a reporting company must be filed with FINCEN within 30 days of such change."}
                </p>
              </ul>

              <button
                className="btn_boi mt-3 ms-md-3 mb-3"
                onClick={() => Navigate("/getStarted")}
              >
                {toggle ? "Presentar Mi Informe" : "File My Report"}
              </button>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div>
                <img src={section_3_4} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="FAQS-section bg-light" id="faq">
        <div class="container">
          <h1 class="heading-2 text-center mb-3 fw-bold">FAQ's</h1>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {toggle
                    ? "¿QUÉ ES LA LEY DE TRANSPARENCIA CORPORATIVA?"
                    : "WHAT IS THE CORPORATE TRANSPARENCY ACT?"}
                </button>
              </h2>

              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div>
                    <ul>
                      <li>
                        {toggle
                          ? "Una ley aprobada por el Congreso para ayudar a combatir el lavado de dinero por parte de organizaciones criminales y terroristas. La ley requiere que la mayoría de las empresas propiedad de corporaciones, LLC y otras entidades similares proporcionen cierta “información de propiedad beneficiosa” (“BOI”) a la “Red de Ejecución de Delitos Financieros” (FINCEN), que forma parte del Departamento del Tesoro de los EE.UU."
                          : "An Act passed by Congress to help fight money laundering by criminal and terrorist organizations. The Act requires most businesses owned by corporations, LLCs, and other similar entities to provide certain “beneficial ownership information” (“BOI”) to the “Financial Crimes Enforcement Network” (FINCEN), which is a part of the U.S. Department of the Treasury."}
                      </li>
                      <li>
                        {toggle
                          ? "Hay 23 tipos diferentes de entidades que están exentas de los requisitos de informe. Haga clic en el siguiente enlace para revisar las exenciones:"
                          : "There are 23 different types of entities that are exempt from the reporting requirements. Click on the following link to review the exemptions:"}
                        <a href="https://www.fincen.gov/boi-faqs#C_1">
                          https://www.fincen.gov/boi-faqs#C_1
                        </a>
                      </li>
                      <li>
                        {toggle
                          ? "Si su empresa no está exenta, debe presentar cierta “información de propiedad beneficiosa” (“BOI”) con FINCEN, que forma parte del Departamento del Tesoro de los EE.UU."
                          : "If your company is not exempt, you are required to file certain “beneficial ownership information” (“BOI”) with FINCEN, which is a part of the U.S. Department of the Treasury."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  {toggle
                    ? "¿QUÉ ES LA “INFORMACIÓN SOBRE LA PROPIEDAD BENEFICIOSA”?"
                    : "WHAT IS “BENEFICIAL OWNERSHIP INFORMATION”?"}
                </button>
              </h2>

              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div>
                    <ul>
                      <li>
                        {toggle
                          ? "La información sobre la propiedad beneficiosa se refiere a la información de identificación sobre tanto su empresa como todos los individuos que poseen o controlan directa o indirectamente su empresa. Para obtener detalles específicos, vaya a"
                          : "Beneficial ownership information refers to identifying information about both your company and all individuals who directly or indirectly own or control your company. For specifics, go to"}
                        <a href="https://www.fincen.gov/boi" target="_blank">
                          {" "}
                          www.fincen.gov/boi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  {toggle
                    ? "¿CUÁL ES LA FECHA LÍMITE PARA PRESENTAR?"
                    : "WHAT IS THE DEADLINE FOR FILING?"}
                </button>
              </h2>

              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div>
                    <ul>
                      <li>
                        {toggle
                          ? "Para las empresas formadas antes del 31 de diciembre de 2023, la fecha límite es el 31 de diciembre de 2024."
                          : "For companies formed before December 31, 2023, the deadline is December 31, 2024."}
                      </li>
                      <li>
                        {toggle
                          ? "Para las empresas formadas después del 1 de enero de 2024, la fecha límite es de 90 días desde la formación."
                          : "For companies formed after January 1, 2024, the deadline is 90 days from formation."}
                      </li>
                      <li>
                        {toggle
                          ? "Para cada empresa informante con cambios en su BOI, 30 días desde dicho cambio."
                          : "For every reporting company with changes in its BOI, 30 days from such change."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                >
                  {toggle
                    ? "¿CUÁLES SON LAS PENALIZACIONES SI NO PRESENTO A TIEMPO?"
                    : "WHAT ARE THE PENALTIES IF I FAIL TO TIMELY FILE?"}
                </button>
              </h2>

              <div
                id="flush-collapsefour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div>
                    <ul>
                      <li>
                        {toggle
                          ? "Multas civiles de hasta $500 por día."
                          : "Civil penalties up to $500 per day;"}
                      </li>
                      <li>
                        {toggle
                          ? "Penalidades criminales de hasta dos años de prisión y una multa de hasta $10,000.00."
                          : "Criminal penalties up to two years imprisonment and a fine up to $10,000.00."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefive"
                  aria-expanded="false"
                  aria-controls="flush-collapsefive"
                >
                  {toggle
                    ? "¿CUÁLES SON LAS EXENCIONES A LA PRESENTACIÓN DE BOI?"
                    : "WHAT ARE THE EXEMPTIONS TO BOI FILING?"}
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div>
                    <ul>
                      <li>
                        {toggle
                          ? "Emisor de Informes de Valores"
                          : "Securities Reporting Issuer"}
                      </li>
                      <li>
                        {toggle
                          ? "Autoridad Gubernamental"
                          : "Governmental Authority"}
                      </li>
                      <li>{toggle ? "Banco" : "Bank"}</li>
                      <li>
                        {toggle ? "Cooperativa de Crédito" : "Credit Union"}
                      </li>
                      <li>
                        {toggle
                          ? "Empresa de Servicios Monetarios"
                          : "Money Services Business"}
                      </li>
                      <li>
                        {toggle
                          ? "Corredor o Distribuidor de Valores"
                          : "Broker Or Dealer In Securities"}
                      </li>
                      <li>
                        {toggle
                          ? "Compañía de Inversiones o Asesor de Inversiones"
                          : "Investment Company Or Investment Advisor"}
                      </li>
                      <li>
                        {toggle ? "Compañía de Seguros" : "Insurance Company"}
                      </li>
                      <li>{toggle ? "Firma Contable" : "Accounting Firm"}</li>
                      <li>
                        {toggle
                          ? "Entidad de Inversión Común"
                          : "Pooled Investment Vehicle"}
                      </li>
                      <li>
                        {toggle
                          ? "Compañía Operativa Grande"
                          : "Large Operating Company"}
                      </li>
                      <li>{toggle ? "Entidad Inactiva" : "Inactive Entity"}</li>
                      {/* Add remaining items as needed */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center mt-5">
          <h3 className="text-center fw-bold mb-3">
            {toggle ? "Para Más Preguntas Frecuentes" : "For Further FAQ's"}
          </h3>
          <a
            href="https://www.fincen.gov/boi-faqs"
            target="_blank"
            className="btn btn_boi"
          >
            {toggle ? "Aprende Más" : "Learn More"}
          </a>
        </div>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 col-sm-12">
              <div className="d-flex flex-column justify-content-center mt-5">
                <h2 className="text-center fw-bold mb-3">
                  {toggle ? (
                    <>
                      ¿Quiere saber si califica para un{" "}
                      <span style={{ color: "rgba(29, 29, 81, 1)" }}>
                        préstamo comercial
                      </span>
                      ?
                    </>
                  ) : (
                    <>
                      Want to know if you qualify for a{" "}
                      <span style={{ color: "rgba(29, 29, 81, 1)" }}>
                        business loan
                      </span>
                      ?
                    </>
                  )}
                </h2>
                <a
                  href=" "
                  onClick={() => Navigate("/getStarted")}
                  className="btn btn_boi"
                >
                  {toggle ? "Presentar Mi Informe" : "File My Report"}
                </a>
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
