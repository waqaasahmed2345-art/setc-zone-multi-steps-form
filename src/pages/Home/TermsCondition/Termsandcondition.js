/* eslint-disable */
import React from "react";
import "./../globalcss/style.css";
import logo from "../globalimages/logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ToggleContext } from '../../../ToggleContext';
import { useContext } from "react";
import Switch from "react-switch";
import menuImage from "../globalimages/menu.png"


const termsandcondition = () => {
  const Navigate = useNavigate();
  const { toggle, setToggle } = useContext(ToggleContext);

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
            <li class="about nav-item d-lg-none d-md-block active" style={{listStyle:'none'}}>
              <div className="d-flex align-items-center gap-2">
                      {toggle && <p className="mb-0 fw-bold">English</p> }
                          
                          <Switch
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={(value) => setToggle(value)}
                          checked={toggle}
                        />
                        {!toggle && <p className="mb-0 fw-bold">Spanish</p> }
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
               <img
                  src={menuImage}
                  style={{ width: "20px", height: "20px" }}
                />
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
                    <a className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} style={{cursor:'pointer'}} onClick={() => Navigate("/about_us")}>
                      {toggle ? 'Quiénes somos' : 'About Us'}
                    </a>
                  </li>

                  <li class="about nav-item  me-1">
                    <a className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} href="#faq">
                    {toggle ? 'Preguntas frecuentes' : 'FAQ`s'}

                    </a>
                  </li>

                  <li class="about nav-item  me-3">
                    <a
                      className={toggle ? "font nav-link cool-link" : "nav-link cool-link"} 
                      href="mailto:admin@fincensafe.com"
                    >
                      {toggle ? 'Contacte con nosotros' : 'Contact Us'}
                    </a>
                  </li>

                


                  <li class="about nav-item active me-1">
                    <button
                      class="btn btn_start py-2"
                      onClick={() => Navigate("/getStarted")}
                    >
                      {toggle ? 'Comenzar' : 'Get Started'}
                    </button>
                  </li>
                  <li class="about d-none d-lg-block nav-item active  ms-5" style={{listStyle:'none'}}>
                    <div className="d-flex align-items-center gap-2">
                      {toggle && <p className="mb-0 fw-bold">English</p> }
                          <Switch
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={(value) => setToggle(value)}
                          checked={toggle}
                        />
                        {!toggle && <p className="mb-0 fw-bold">Spanish</p> }
                        </div>
                      </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section class="privacy-policy">
        <div class="container">
          <div class="row">
            <h1 class="heading-title fw-bold text-center text-white">
            {toggle ? "Política de privacidad" : "Privacy Policy"}y
            </h1>
            {/* <!-- <ol class="breadcrumb d-flex justify-content-center">
              <li class="text-white"><a href=" ">Home/</a></li>
              <li class="active text-white">Privacy Policy</li>
            </ol> --> */}
          </div>
        </div>
      </section>
      <section className="privacy-content">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10 col-md-12">
        <div className="content-pri">
          {/* <!-- <h2 className="top-heading" style="color: #fa360a">Privacy Policy</h2> --> */}
          <div className="privacy-content">
            <h6>{toggle ? "Política de privacidad" : "Privacy Policy"}</h6>
            <p>
              {toggle
                ? "En FinCenSafe, accesible desde www.FinCenSafe, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que se recopilan y registran en FinCenSafe y cómo la usamos."
                : "At FinCenSafe, accessible from www.FinCenSafe, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FinCenSafe and how we use it."}
            </p>
            <p>
              {toggle
                ? "Si tienes preguntas adicionales o necesitas más información sobre nuestra Política de Privacidad, no dudes en contactarnos."
                : "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."}
            </p>
            <p>
              {toggle
                ? "Esta Política de Privacidad se aplica solo a nuestras actividades en línea y es válida para los visitantes de nuestro sitio web con respecto a la información que compartieron y/o recopilaron en FinCenSafe. Esta política no se aplica a ninguna información recopilada fuera de línea o a través de canales distintos de este sitio web."
                : "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in FinCenSafe. This policy is not applicable to any information collected offline or via channels other than this website."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Consentimiento" : "Consent"}</h6>
            <p>
              {toggle
                ? "Al usar nuestro sitio web, consientes nuestra Política de Privacidad y aceptas sus términos."
                : "By using our website, you hereby consent to our Privacy Policy and agree to its terms."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Información que recopilamos" : "Information we collect"}</h6>
            <p>
              {toggle
                ? "La información personal que se te solicita proporcionar, y las razones por las que se te solicita proporcionarla, te serán aclaradas en el punto en el que se te solicite proporcionar tu información personal."
                : "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."}
            </p>
            <p>
              {toggle
                ? "Si te pones en contacto con nosotros directamente, es posible que recibamos información adicional sobre ti, como tu nombre, dirección de correo electrónico, número de teléfono, el contenido del mensaje y/o los archivos adjuntos que puedas enviarnos, y cualquier otra información que puedas elegir proporcionar."
                : "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."}
            </p>
            <p>
              {toggle
                ? "Cuando te registres para una cuenta, es posible que te pidamos tu información de contacto, incluidos elementos como nombre, nombre de la empresa, dirección, dirección de correo electrónico y número de teléfono."
                : "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Cómo utilizamos tu información" : "How we use your information"}</h6>
            <p>
              {toggle ? "Utilizamos la información que recopilamos de diversas maneras, incluyendo:" : "We use the information we collect in various ways, including to:"}
            </p>
            <ul>
              <li>{toggle ? "Proporcionar, operar y mantener nuestro sitio web" : "Provide, operate, and maintain our website"}</li>
              <li>{toggle ? "Mejorar, personalizar y expandir nuestro sitio web" : "Improve, personalize, and expand our website"}</li>
              <li>{toggle ? "Entender y analizar cómo usas nuestro sitio web" : "Understand and analyze how you use our website"}</li>
              <li>{toggle ? "Desarrollar nuevos productos, servicios, características y funcionalidades" : "Develop new products, services, features, and functionality"}</li>
              <li>{toggle ? "Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluso para el servicio al cliente, para proporcionarte actualizaciones y otra información relacionada con el sitio web, y para fines de marketing y promoción" : "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes"}</li>
              <li>{toggle ? "Enviarte correos electrónicos" : "Send you emails"}</li>
              <li>{toggle ? "Detectar y prevenir fraudes" : "Find and prevent fraud"}</li>
            </ul>
          </div>
          <div>
            <h6>{toggle ? "Archivos de registro" : "Log Files"}</h6>
            <p>
              {toggle
                ? "FinCenSafe sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de alojamiento hacen esto como parte del análisis de los servicios de alojamiento. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), fecha y hora, páginas de referencia/salida y, posiblemente, el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable. El propósito de la información es analizar tendencias, administrar el sitio, rastrear el movimiento de los usuarios en el sitio web y recopilar información demográfica."
                : "FinCenSafe follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Cookies y balizas web" : "Cookies and Web Beacons"}</h6>
            <p>
              {toggle
                ? "Al igual que cualquier otro sitio web, FinCenSafe utiliza 'cookies'. Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que accedieron o visitaron. La información se utiliza para optimizar la experiencia de los usuarios mediante la personalización del contenido de nuestras páginas web según el tipo de navegador de los visitantes y/o otra información."
                : "Like any other website, FinCenSafe uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information."}
            </p>
            <p>{toggle ? "Para obtener más información general sobre las cookies." : "For more general information on cookies."}</p>
          </div>
          <div>
            <h6>{toggle ? "Cookie de DART de Google DoubleClick" : "Google DoubleClick DART Cookie"}</h6>
            <p>
              {toggle
                ? "Google es uno de los proveedores de terceros en nuestro sitio. También utiliza cookies, conocidas como cookies de DART, para servir anuncios a los visitantes de nuestro sitio en función de su visita a www.website.com y otros sitios en Internet. Sin embargo, los visitantes pueden optar por rechazar el uso de cookies de DART visitando la Política de privacidad de la red de anuncios y contenido de Google en la siguiente URL: https://policies.google.com/technologies/ads"
                : "Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads"}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Políticas de privacidad de socios publicitarios" : "Advertising Partners Privacy Policies"}</h6>
            <p>
              {toggle
                ? "Puedes consultar esta lista para encontrar la Política de Privacidad de cada uno de los socios publicitarios de FinCenSafe."
                : "You may consult this list to find the Privacy Policy for each of the advertising partners of FinCenSafe."}
            </p>
            <p>
              {toggle
                ? "Los servidores de anuncios o redes de anuncios de terceros utilizan tecnologías como cookies, JavaScript o Web Beacons que se utilizan en sus respectivos anuncios y enlaces que aparecen en FinCenSafe, los cuales se envían directamente al navegador de los usuarios. Reciben automáticamente tu dirección IP cuando esto ocurre. Estas tecnologías se utilizan para medir la efectividad de sus campañas publicitarias y/o para personalizar el contenido publicitario que ves en los sitios web que visitas."
                : "Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on FinCenSafe, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."}
            </p>
            <p>
              {toggle
                ? "Ten en cuenta que FinCenSafe no tiene acceso ni control sobre estas cookies que utilizan los anunciantes de terceros."
                : "Note that FinCenSafe has no access to or control over these cookies that are used by third-party advertisers."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Políticas de privacidad de terceros" : "Third Party Privacy Policies"}</h6>
            <p>
              {toggle
                ? "La Política de Privacidad de FinCenSafe no se aplica a otros anunciantes o sitios web. Por lo tanto, te recomendamos que consultes las Políticas de Privacidad respectivas de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo optar por no participar en ciertas opciones."
                : "FinCenSafe Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."}
            </p>
            <p>
              {toggle
                ? "Puedes optar por desactivar las cookies a través de las opciones individuales de tu navegador. Para obtener más información detallada sobre la gestión de cookies con navegadores web específicos, se puede encontrar en los respectivos sitios web de los navegadores."
                : "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Derechos de privacidad de la CCPA (No vender mi información personal)" : "CCPA Privacy Rights (Do Not Sell My Personal Information)"}</h6>
            <p>
              {toggle
                ? "Según la CCPA, entre otros derechos, los consumidores de California tienen derecho a: Solicitar que una empresa que recopila datos personales de un consumidor divulgue las categorías y piezas específicas de datos personales que una empresa ha recopilado sobre los consumidores."
                : "Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."}
            </p>
            <p>
              {toggle
                ? "Solicitar que una empresa elimine cualquier dato personal sobre el consumidor que una empresa haya recopilado. Solicitar que una empresa que vende los datos personales de un consumidor no venda los datos personales del consumidor. Si haces una solicitud, tenemos un mes para responderte. Si deseas ejercer alguno de estos derechos, comunícate con nosotros."
                : "Request that a business delete any personal data about the consumer that a business has collected. Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Derechos de protección de datos de la GDPR" : "GDPR Data Protection Rights"}</h6>
            <p>
              {toggle
                ? "Nos gustaría asegurarnos de que estás completamente informado de todos tus derechos de protección de datos. Cada usuario tiene derecho a lo siguiente:"
                : "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"}
            </p>
            <p>
              {toggle
                ? "El derecho de acceso: tienes derecho a solicitar copias de tus datos personales. Es posible que te cobremos una pequeña tarifa por este servicio."
                : "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service."}
            </p>
            <p>
              {toggle
                ? "El derecho de rectificación: tienes derecho a solicitar que corrijamos cualquier información que creas que es inexacta. También tienes derecho a solicitar que completemos la información que creas que está incompleta."
                : "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."}
            </p>
            <p>
              {toggle
                ? "El derecho a borrar: tienes derecho a solicitar que borremos tus datos personales, bajo ciertas condiciones."
                : "The right to erasure – You have the right to request that we erase your personal data, under certain conditions."}
            </p>
            <p>
              {toggle
                ? "El derecho a restringir el procesamiento: tienes derecho a solicitar que restrinjamos el procesamiento de tus datos personales, bajo ciertas condiciones."
                : "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions."}
            </p>
            <p>
              {toggle
                ? "El derecho a oponerse al procesamiento: tienes derecho a oponerte a nuestro procesamiento de tus datos personales, bajo ciertas condiciones."
                : "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions."}
            </p>
            <p>
              {toggle
                ? "El derecho a la portabilidad de los datos: tienes derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización, o directamente a ti, bajo ciertas condiciones."
                : "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."}
            </p>
            <p>
              {toggle
                ? "Si realizas una solicitud, tenemos un mes para responderte. Si deseas ejercer alguno de estos derechos, comunícate con nosotros."
                : "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."}
            </p>
          </div>
          <div>
            <h6>{toggle ? "Derechos de protección de datos de la GDPR" : "GDPR Data Protection Rights"}</h6>
            <p>
              {toggle
                ? "Otra parte de nuestra prioridad es añadir protección para los niños mientras usan Internet. Animamos a los padres y tutores a observar, participar en y/o supervisar y guiar su actividad en línea."
                : "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."}
            </p>
            <p>
              {toggle
                ? "FinCenSafe no recopila intencionalmente ninguna Información Personal Identificable de niños menores de 13 años. Si crees que tu hijo proporcionó este tipo de información en nuestro sitio web, te recomendamos encarecidamente que te pongas en contacto con nosotros de inmediato y haremos todo lo posible para eliminar rápidamente esa información de nuestros registros."
                : "FinCenSafe does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."}
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
          {toggle ? "2024 | Política de Privacidad" : "2024 | Privacy Policy"}
        </div>
      </p>
    </div>
  </div>
</section>
    </div>
  );
};

export default termsandcondition;
