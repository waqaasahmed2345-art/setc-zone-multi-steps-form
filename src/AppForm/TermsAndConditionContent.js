import React from "react";
import { ToggleContext } from '../ToggleContext';
import { useContext } from "react";


function TermsAndConditionContent({readStepZeroTerms , setReadStepZeroTerms, setFormData , formData}) {
    const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <div class="modal-body">
      <p style={{ color: "orangered" }}>
        {toggle ? "ÍNDICE DE CONTENIDOS" : "TABLE OF CONTENTS"}
      </p>
      <p>
        {toggle
          ? "Los siguientes términos y condiciones (los “Términos”) se aplican a su uso de FinCENsafe:"
          : "The following terms and conditions (the “Terms”) apply to your use of FinCENsafe:"}
      </p>
      <p>
        <b>{toggle ? "1. El Servicio." : "1. The Service."}</b>
      </p>

      <p>
        {toggle
          ? "FinCENsafe ofrece un servicio (“Servicio”) conveniente y rentable para completar la “información de propiedad beneficiosa” (“BOI”) requerida por las “empresas informantes”, según se define en la Ley de Transparencia Corporativa (“CTA”) y presentada a la Red de Ejecución de Crímenes Financieros (“FinCEN”), una oficina del Departamento del Tesoro de los Estados Unidos."
          : "FinCENsafe offers a convenient and cost-effective service (“Service”) and process to complete required “beneficial ownership information” (“BOI”) by “reporting companies,” as defined in the Corporate Transparency Act (“CTA”) and filed with the Financial Crimes Enforcement Network (“FinCEN”), a bureau of the United States Department of the Treasury."}
      </p>

      <p>
        {toggle
          ? "A partir del 1 de enero de 2024, se requerirán presentaciones de la CTA ante FinCEN para combatir el blanqueo de dinero nacional e internacional, la financiación del terrorismo y otros delitos financieros. La información que proporcione al Servicio para la presentación de la CTA se enviará directamente a FinCEN."
          : "Starting January 1, 2024, CTA filings are required by FinCEN in order to combat domestic and international money laundering, terrorist financing, and other financial crimes. The information you provide to the Service for the CTA filing will be provided directly to FinCEN."}
      </p>
      <p>
        {toggle
          ? "El Servicio en sí mismo no puede y no está destinado a proporcionar orientación o asesoramiento financiero o regulatorio. Por favor, comuníquese con su abogado, contador u otro profesional calificado para cualquier pregunta sobre el cumplimiento de la CTA. EL CONTENIDO EN EL SITIO Y EL SERVICIO NO SON NI DEBERÍAN CONSIDERARSE ASESORAMIENTO LEGAL O FINANCIERO O UN SUSTITUTO DE OBTENER ASESORAMIENTO LEGAL O FINANCIERO DE UN PROFESIONAL CALIFICADO."
          : "The Service itself cannot and is not intended to provide financial or regulatory guidance or advice. Please contact your lawyer or accountant or other qualified professional with any questions regarding CTA compliance. THE CONTENT ON THE SITE AND THE SERVICE ARE NOT AND SHOULD NOT BE CONSIDERED LEGAL OR FINANCIAL ADVICE OR A SUBSTITUTE FOR OBTAINING LEGAL OR FINANCIAL ADVICE FROM A QUALIFIED PROFESSIONAL."}
      </p>

      <p>
        <b>{toggle ? "2. Privacidad." : "2. Privacy."}</b>
      </p>
      <p>
        {toggle
          ? "Aparte de la presentación electrónica de su BOI proporcionado a FinCEN, a menos que haya una orden judicial de un tribunal de jurisdicción competente, el Servicio no compartirá ninguno de sus BOI con ningún tercero sin su consentimiento previo por escrito."
          : "Other than the Service’s e-filing of your provided BOI to FinCEN, absent a court order from a court of competent jurisdiction, the Service will not share any of your BOI with any third party without your prior written consent."}
      </p>

      <p>
        <b>
          {toggle
            ? "3. Usuarios del Servicio de Empresas Informantes."
            : "3. Reporting Company Users of the Service."}
        </b>
      </p>
      <p>
        {toggle
          ? "Al adquirir los servicios de FinCENsafe, acepta la plena responsabilidad por usted mismo y su entidad en el uso del Servicio, incluida la presentación oportuna de toda la BOI requerida con respecto a su empresa y cada uno de los propietarios beneficiosos, según se define en la CTA. El Servicio está diseñado para que responda a las preguntas obligatorias de la CTA. Sin embargo, usted reconoce que el Servicio depende de sus respuestas verdaderas, correctas y completas de BOI, y es probable que necesite ser actualizado si ocurren cambios en el futuro con respecto a las divulgaciones requeridas de BOI. El uso del Servicio es bajo su propio riesgo. Asume toda la responsabilidad por todos los resultados, en la medida permitida por la ley. FinCENsafe solo puede presentar a FinCEN el BOI proporcionado por usted. Al utilizar el Servicio, acepta eximir a FinCENsafe de cualquier pérdida, responsabilidad o daño que pueda sufrir en relación con su cumplimiento o presentaciones de la CTA."
          : "By your purchase of FinCENsafe’s services, you accept full responsibility for yourself and your entity in your use of the Service, including for the timely submission of all required BOI regarding your company and each and every beneficial owner, as such term is defined under the CTA. The Service is designed for you to answer mandatory CTA questions. However, you acknowledge that the Service depends on your truthful, correct, and complete BOI answers, and will likely need to be updated if any changes occur in the future regarding the required BOI disclosures. Use of the Service is at your own risk. You assume full responsibility for all outcomes, to the extent permitted by law. FinCENsafe can only file with FinCEN the BOI provided by you. By using the Service, you agree to hold FinCENsafe harmless from any loss, liability or damages that you may suffer in connection with your CTA compliance or filings."}
      </p>

      <div className="bkgrnd">
        <p style={{ fontWeight: 600 }}>
          {toggle
            ? "Además, usted acepta y entiende que:"
            : "Additionally, you agree and understand that:"}
        </p>
        <ul>
          <div className="d-flex gap-2">
            <div className="dot_img">
              <img src="/Big_dot.png" className="" alt="" />
            </div>
            <li>
              {toggle
                ? "La entrada de cierta información financiera y otra confidencial en el Servicio en respuesta a las preguntas obligatorias de la CTA es necesaria para utilizar el Servicio, y entiende que se han tomado medidas diseñadas para proteger su información, pero ningún sistema informático es totalmente seguro."
                : "The entry of certain financial and other confidential information into the Service in response to the mandatory CTA questions is required to use the Service, and understand that measures have been taken that are designed to safeguard your information, but no computer system is totally secure."}
            </li>
          </div>
          <div className="d-flex gap-2">
            <div className="dot_img">
              <img src="/Big_dot.png" className="" alt="" />
            </div>
            <li>
              {toggle
                ? "Reconoce que el Servicio no garantiza que esté en cumplimiento con los requisitos de la CTA o promete que estará en cumplimiento."
                : "You acknowledge that the Service does not guarantee that you are in compliance with the CTA requirements or promise that you will be in compliance."}
            </li>
          </div>
        </ul>
      </div>

      <p>
        <b>{toggle ? "4. Reglas de Contacto" : "4. Rules of Contact"}</b>
      </p>
      <p>
        {toggle
          ? "Además de sus otras promesas y obligaciones, al utilizar el Servicio de FinCENsafe, acepta no hacer ninguna de las siguientes acciones:"
          : "In addition to your other promises and obligations, by using FinCENsafe’s Service, you agree not to do any of the following:"}
      </p>
      <ul>
        <div className="d-flex gap-2">
          <div className="dot_img">
            {/* <img src="/Big_dot.png" className="" alt="" /> */}
          </div>
          <p>
            {toggle
              ? "• Usar el sistema para presentar información falsa a FinCEN, o"
              : "• Use the system to file false information to FinCEN, or"}
          </p>
        </div>
        <div className="d-flex gap-2">
          <div className="dot_img">
            {/* <img src="/Big_dot.png" className="" alt="" /> */}
          </div>
          <p>
            {toggle
              ? "• Usar el Servicio de cualquier manera que viole las leyes o regulaciones aplicables o que esté prohibida por estos Términos;"
              : "• Use the Service in any manner that violates any applicable laws or regulations or is prohibited by these Terms;"}
          </p>
        </div>
      </ul>

      <p>
        <b>
          {toggle ? "5. Renuncia de Garantías" : "5. Disclaimer of Warranties"}
        </b>
      </p>
      <p>
        {toggle
          ? "Además de sus otras promesas y obligaciones, al utilizar el Servicio de FinCENsafe, acepta no hacer ninguna de las siguientes acciones:"
          : "In addition to your other promises and obligations, by using FinCENsafe’s Service, you agree not to do any of the following:"}
      </p>
      <ul>
        <li>
          <p>
            <span className="spann">
              {toggle ? "En general." : "Generally."}
            </span>{" "}
            {toggle
              ? "Su uso del Servicio es bajo su propio riesgo. EL SERVICIO SE PROPORCIONA TAL CUAL Y SEGÚN DISPONIBILIDAD, SIN GARANTÍAS DE NINGÚN TIPO, Y EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, FINCENSAFE (Y SUS MIEMBROS, EMPLEADOS, AGENTES, ASOCIADOS, SOCIOS, LICENCIATARIOS Y PROVEEDORES) RENUNCIA Y EXCLUYE TODAS LAS GARANTÍAS, YA SEAN ESTATUTARIAS, EXPRESAS O IMPLÍCITAS, INCLUYENDO, PERO NO LIMITADO A, LAS GARANTÍAS DE COMERCIABILIDAD, APTITUD PARA UN PROPÓSITO PARTICULAR, TÍTULO, CALIDAD SATISFACTORIA, NO INFRACCIÓN, Y AQUELLAS QUE SURGEN DE UN CURSO DE NEGOCIACIÓN O USO COMERCIAL. FINCENSAFE NO GARANTIZA QUE PODRÁ ACCEDER O USAR EL SERVICIO EN LOS TIEMPOS O LUGARES DE SU ELECCIÓN; QUE EL SERVICIO SERÁ ININTERRUMPIDO O SIN ERRORES; QUE SE CORREGIRÁN LOS DEFECTOS; O QUE EL SERVICIO ESTÁ LIBRE DE VIRUS O COMPONENTES NOCIVOS."
              : "Your use of the Service is at your own risk. THE SERVICE IS PROVIDED ON AN ‘AS IS’ AND ‘AS AVAILABLE’ BASIS, WITHOUT WARRANTIES OF ANY KIND, AND TO THE FULLEST EXTENT PERMITTED BY LAW, FINCENSAFE (AND ITS MEMBERS, EMPLOYEES, AGENTS, ASSOCIATES, PARTNERS, LICENSORS AND SUPPLIERS) DISCLAIM AND EXCLUDE ALL WARRANTIES, WHETHER STATUTORY, EXPRESS, OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SATISFACTORY QUALITY, NON-INFRINGEMENT, AND THOSE ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. FINCENSAFE DOES NOT WARRANT THAT YOU WILL BE ABLE TO ACCESS OR USE THE SERVICE AT THE TIMES OR LOCATIONS OF YOUR CHOOSING; THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE; THAT DEFECTS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS."}
          </p>
        </li>
        <li>
          <p>
            {toggle
              ? "Usted es el único responsable de confirmar que FinCEN ha recibido con éxito sus presentaciones a tiempo. FinCENsafe rechaza cualquier responsabilidad por presentaciones que no sean recibidas por FinCEN (o que sean recibidas tarde) debido a sus errores, actos u omisiones, eventos de fuerza mayor, actos u omisiones de terceros (incluidos actos delictivos y fallos de proveedores de servicios), Internet, la red o sistemas de FinCEN, o cualquier otra causa, razón, evento o circunstancia fuera del control directo de FinCENsafe. FINCENSAFE NO ES RESPONSABLE DE CUALQUIERA MULTA O PENALIZACIÓN EMITIDA POR FINCEN AL UTILIZAR NUESTRO SISTEMA PARA PRESENTAR INFORMACIÓN FALSA O INCOMPLETA A FINCEN SOBRE UNA EMPRESA INFORMANTE."
              : "You are solely responsible for confirming that FinCEN has successfully received your filings on time. FinCENsafe disclaims any liability or responsibility for filings that are not received by FinCEN (or that are received late) due to your mistakes, acts or omissions, events of force majeure, acts or omissions of third parties (including criminal acts and failures of service providers), the Internet, FinCEN’s network or systems, or any other cause, reason, event or circumstances outside of FinCENsafe’s direct control. FINCENSAFE IS NOT LIABLE FOR ANY FINES OR PENALTIES ISSUED BY FINCEN WHEN USING OUR SYSTEM TO FILE FALSE OR INCOMPLETE INFORMATION TO FINCEN ABOUT A REPORTING COMPANY."}
          </p>
        </li>
        <li>
          <p className="spann">
            {toggle
              ? "Renuncia Especial respecto al Servicio."
              : "Special Disclaimer regarding the Service."}
          </p>
        </li>
        <li>
          <p>
            {toggle
              ? "FinCENsafe no está en el negocio de proporcionar servicios o asesoramiento legal, financiero, fiscal, de salud, inmobiliario u otros profesionales. Si tiene alguna pregunta sobre su estatus como “empresa informante” bajo la CTA, consulte los servicios de un profesional competente cuando se necesite este tipo de asistencia. El Servicio es simplemente una herramienta fácil y rentable para cumplir con los requisitos de presentación de BOI según lo exige la CTA, y cualquier información contenida en el sitio web de FinCENsafe (el “Sitio”) no debe interpretarse como asesoramiento financiero, legal o profesional."
              : "FinCENsafe is not in the business of providing legal, financial, tax, healthcare, real estate, or other professional services or advice. If you have any questions regarding your status as a “reporting company” under the CTA, please consult the services of a competent professional when this type of assistance is needed. The Service is a simply an easy and cost-effective tool to comply with the BOI filing requirements as required by the CTA, and any information contained on the FinCENsafe website (the “Site”) is not to be construed as financial, legal, or professional advice."}
          </p>
        </li>
      </ul>
      <p>
        <b>
          {toggle
            ? "6. Limitación de Responsabilidad"
            : "6. Limitation of Liability"}
        </b>
      </p>
      <p>
        {toggle
          ? "NADA EN ESTOS TÉRMINOS AFECTARÁ SUS DERECHOS LEGALES COMO CONSUMIDOR O EXCLUIRÁ O LIMITAR CUALQUIER RESPONSABILIDAD QUE NO PUEDA SER LEGALMENTE EXCLUIDA O LIMITADA."
          : "NOTHING IN THESE TERMS SHALL AFFECT YOUR LEGAL RIGHTS AS A CONSUMER OR EXCLUDE OR LIMIT ANY LIABILITY, WHICH CANNOT BE LEGALLY EXCLUDED, OR LIMITED."}
      </p>
      <p>
        {toggle
          ? "FINCENSAFE NO SERÁ RESPONSABLE ANTE USTED POR CUALQUIER DAÑO INDIRECTO, INCIDENTAL, CONSECUENTE, ESPECIAL, PUNITIVO, REMOTO U OTRO SIMILAR, INCLUYENDO, PERO NO LIMITADO A, PÉRDIDA DE INGRESOS, BENEFICIOS PERDIDOS, PÉRDIDA DE DATOS O INTERRUPCIÓN DE NEGOCIOS U OTRAS PÉRDIDAS INTANGIBLES (AUNQUE ESTAS PÉRDIDAS SEAN CALIFICADAS), QUE SURJAN O ESTÉN RELACIONADAS DE CUALQUIER MANERA CON ESTOS TÉRMINOS O EL SERVICIO EN SÍ MISMO, YA SEA BASADO EN CONTRATO, AGRAVIO U OTRA TEORÍA LEGAL, Y SI FINCENSAFE HA SIDO O NO ADVERTIDO DE LA POSIBILIDAD DE DICHOS DAÑOS. SUJETO A LAS EXCLUSIONES EXPRESAMENTE ESTABLECIDAS EN ESTA SECCIÓN, EN TODOS LOS CASOS, FINCENSAFE NO SERÁ RESPONSABLE ANTE USTED POR MÁS DEL MONTO QUE HA PAGADO A FINCENSAFE DE ACUERDO CON ESTOS TÉRMINOS EN LOS SEIS (6) MESES INMEDIATAMENTE ANTERIORES A LA FECHA EN LA QUE USTED PRIMERAMENTE PRESENTA UNA RECLAMACIÓN. USTED RECONOCE Y ACEPTA QUE SI NO HA PAGADO NADA A FINCENSAFE DURANTE DICHO PERÍODO DE TIEMPO, SU ÚNICO RECURSO (Y LA RESPONSABILIDAD EXCLUSIVA DE FINCENSAFE) PARA CUALQUIER DISPUTA CON FINCENSAFE ES DEJAR DE USAR EL SERVICIO Y CANCELAR SU CUENTA."
          : "FINCENSAFE SHALL NOT BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, REMOTE, OR OTHER SIMILAR DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES, LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION OR OTHER INTANGIBLE LOSSES (HOWEVER SUCH LOSSES ARE QUALIFIED), ARISING OUT OF OR RELATING IN ANY WAY TO THESE TERMS OR THE SERVICE ITSELF, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT FINCENSAFE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SUBJECT TO THE EXCLUSIONS EXPRESSLY SET FORTH IN THIS SECTION, IN ALL EVENTS, FINCENSAFE SHALL NOT BE LIABLE TO YOU FOR MORE THAN THE AMOUNT YOU HAVE PAID TO FINCENSAFE IN ACCORDANCE WITH THESE TERMS IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT A CLAIM. YOU ACKNOWLEDGE AND AGREE THAT IF YOU HAVE NOT PAID ANYTHING TO FINCENSAFE DURING SUCH TIME PERIOD, YOUR SOLE REMEDY (AND FINCENSAFE’S EXCLUSIVE LIABILITY) FOR ANY DISPUTE WITH FINCENSAFE IS TO STOP USING THE SERVICE AND TO CANCEL YOUR ACCOUNT."}
      </p>
      <p>
        {toggle
          ? "LAS LIMITACIONES DE DAÑOS ESTABLECIDAS ANTERIORMENTE SON ELEMENTOS FUNDAMENTALES DE LA BASE DEL ACUERDO ENTRE FINCENSAFE Y USTED. En la medida en que FinCENsafe no pueda, como cuestión de ley aplicable, excluir cualquier garantía o limitar su responsabilidad como se establece en estos Términos, el alcance de dicha garantía y el alcance de la responsabilidad de FinCENsafe será el mínimo permitido por la ley aplicable."
          : "THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN FINCENSAFE AND YOU. To the extent that FinCENsafe may not, as a matter of applicable law, disclaim any warranty or limit its liability as set forth in these Terms, the scope of such warranty, and the extent of FinCENsafe’s liability, shall be the minimum permitted under such applicable law."}
      </p>
      <p>
        {toggle
          ? "No obstante cualquier disposición en contrario en este Acuerdo, FinCENsafe no tendrá obligaciones ni responsabilidades bajo este Acuerdo en la medida en que una reclamación, daño o responsabilidad sea causado por alguno de los siguientes: (i) sus errores, actos u omisiones, (ii) eventos de fuerza mayor, (iii) actos u omisiones de terceros, incluidos actos criminales, (iv) los proveedores de servicios de FinCENsafe, incluidos los proveedores de servicios en la nube, (v) Internet, (vi) los sistemas de FinCEN, (vii) una modificación o alteración de los Servicios por usted o cualquier otra modificación o alteración actual o intentada por cualquier persona o entidad que no sea FinCENsafe o sus empleados, agentes o subcontratistas, incluida la utilización de cualquier software no autorizado o servicio en la nube que usted o terceros puedan usar o emplear; (viii) el uso de los Servicios por usted para cualquier propósito distinto al previsto o contrario a las instrucciones establecidas en cualquier documentación proporcionada por FinCENsafe; o (ix) su negligencia o conducta más culpable, o incumplimiento de este Acuerdo."
          : "Notwithstanding anything to the contrary in this Agreement, FinCENsafe shall have no obligations or liabilities under this Agreement to the extent a claim, damage, or liability is caused by any of the following: (i) your mistakes, acts or omissions, (ii) events of force majeure, (iii) acts or omissions of third parties, including criminal acts, (iv) FinCENsafe’s service providers, including cloud service providers, (v) the Internet, (vi) FinCEN’s systems, (vii) a modification or alteration of the Services by you or any other actual or attempted modification or alteration by any person or entity other than FinCENsafe or its employees, agents, or subcontractors, including the use of any unauthorized software or cloud service that you or third parties may use or employ; (viii) use of the Services by you for any purpose other than its intended purpose or contrary to instructions set forth in any documentation provided by FinCENsafe; or (ix) your negligence or more culpable conduct, or breach of this Agreement."}
      </p>
      <p>
        <b>{toggle ? "7. Indemnización" : "7. Indemnity"}</b>
      </p>
      <p>
        {toggle
          ? "Usted acepta indemnizar y mantener a FinCENsafe, sus afiliados, funcionarios, miembros, accionistas, empleados, agentes, socios, licenciantes y sucesores indemnes de cualquier pérdida, daño, penalidades, multas, costos, responsabilidades y gastos (incluidos honorarios razonables de abogados y costos de litigio, incluyendo apelaciones) relacionados con o derivados de: (a) su uso de, o incapacidad para usar, el Servicio; (b) su violación de los Términos, y (c) su violación de cualquier ley, regla o regulación federal, estatal o local aplicable. FinCENsafe se reserva el derecho, a su propio costo, de asumir la defensa y el control exclusivos de cualquier asunto que de otro modo esté sujeto a indemnización por usted, en cuyo caso usted cooperará plenamente con FinCENsafe en la presentación de cualquier defensa disponible. Usted acepta que las disposiciones de esta sección sobrevivirán a cualquier terminación de su uso del Servicio, los Términos o su acceso al Servicio."
          : "You agree to indemnify and hold FinCENsafe, its affiliates, officers, members, shareholders, employees, agents, partners, licensors and successors harmless from any losses, damages, penalties, fines, costs, liabilities, and expenses (including reasonable attorneys’ fees and costs of litigation, including appeal) relating to or arising out of: (a) your use of, or inability to use, the Service; (b) your violation of the Terms, and (c) your violation of any applicable federal, state or local laws, rules or regulations. FinCENsafe reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with FinCENsafe in asserting any available defenses. You agree that the provisions in this section will survive any termination of your use of the Service, the Terms or your access to the Service."}
      </p>
      <p>
        <b>{toggle ? "8. Leyes Locales" : "8. Local Laws"}</b>
      </p>
      <p>
        {toggle
          ? "FinCENsafe controla y opera el Servicio desde su sede en los Estados Unidos de América y puede no ser apropiado o estar disponible para su uso en otras ubicaciones. Si utiliza el Servicio fuera de los Estados Unidos de América, es responsable de seguir las leyes locales aplicables."
          : "FinCENsafe controls and operates the Service from its headquarters in the United States of America and it may not be appropriate or available for use in other locations. If you use the Service outside the United States of America, you are responsible for following applicable local laws."}
      </p>
      <p>
        <b>
          {toggle
            ? "9. Resolución de Disputas y Arbitraje; Renuncia a Acciones Colectivas; Limitación de Tiempo para Presentar Reclamaciones"
            : "9. Dispute Resolution and Arbitration; Class Action Waiver; Limitation on Time to File Claims"}
        </b>
      </p>
      <p>
        {toggle
          ? "Por favor, lea esto cuidadosamente. Afecta sus derechos."
          : "Please read this carefully. It affects your rights."}
      </p>
      <div className="bkgrnd">
        <ul>
          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">• Disputas y Ley Aplicable.</span>{" "}
                    Estos Términos estarán sujetos a y serán interpretados de
                    acuerdo con las leyes del Estado de Colorado, Estados Unidos
                    de América, excluyendo sus reglas sobre conflictos de leyes.
                    Usted acepta que cualquier reclamación o disputa que pueda
                    tener contra FinCENsafe debe resolverse exclusivamente en un
                    tribunal estatal o federal ubicado en el Estado de Colorado,
                    excepto si las partes acuerdan lo contrario o como se
                    describe en las subsecciones de Arbitraje a continuación.
                    Usted acepta someterse a la jurisdicción personal de los
                    tribunales ubicados en la Ciudad y el Condado de Denver,
                    Colorado, con el propósito de litigar todas tales
                    reclamaciones o disputas.
                  </>
                ) : (
                  <>
                    <span className="spann">
                      • Disputes and Applicable Law.
                    </span>{" "}
                    These Terms will be subject to and construed in accordance
                    with the laws of the State of Colorado, United States of
                    America excluding its rules regarding conflicts of law. You
                    agree that any claim or dispute you may have against
                    FinCENsafe must be resolved exclusively by a state or
                    federal court located in the State of Colorado, except as
                    otherwise agreed by the parties or as described in the
                    Arbitration subsections below. You agree to submit to the
                    personal jurisdiction of the courts located in the City and
                    County of Denver, Colorado for the purpose of litigating all
                    such claims or disputes.
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">• Ámbito.</span>
                    Este acuerdo de arbitraje (“Términos de Arbitraje”) se
                    aplica a cualquier y todas las disputas, reclamaciones o
                    controversias entre usted y FinCENsafe que surjan de o se
                    relacionen con el Servicio, incluyendo su compra del
                    Servicio, cualquier comunicación, publicidad o marketing por
                    o respecto a FinCENsafe, uso del Sitio (incluyendo su
                    dependencia de cualquier recurso, artículos o información
                    disponible en el Sitio), cualquier producto o servicio
                    ofrecido, vendido o distribuido por FinCENsafe, cualquier
                    aspecto de su relación o transacciones con FinCENsafe, y
                    todos los demás aspectos de su relación con FinCENsafe,
                    pasada, presente o futura, ya sea que surja bajo leyes
                    extranjeras, federales, estatales o locales, o ya sea basada
                    en contrato, estatuto, regulación, ordenanza, agravio
                    (incluyendo, pero no limitado a, fraude, tergiversación,
                    inducción fraudulenta, negligencia, negligencia grave o
                    comportamiento imprudente), prácticas comerciales engañosas
                    o fraudulentas, o cualquier otra teoría legal o equitativa,
                    e incluye la validez, aplicabilidad o alcance de estos
                    Términos de Arbitraje (con la excepción de la aplicabilidad
                    de la Cláusula de Renuncia de Acción Colectiva a
                    continuación) (colectivamente, las “Disputas”).
                  </>
                ) : (
                  <>
                    <span className="spann">• Scope.</span>
                    This agreement to arbitrate (“Arbitration Terms”) applies to
                    any and all disputes, claims, or controversies between you
                    and FinCENsafe arising out of or relating to the Service,
                    including your purchase of the Service, any communications,
                    advertising or marketing by or regarding FinCENsafe, use of
                    the Site (including your reliance on any resources, articles
                    or information made available on the Site), any products or
                    services made available, offered, sold or distributed by
                    FinCENsafe, any aspect of your relationship or transactions
                    with FinCENsafe, and all other aspects of your relationship
                    with FinCENsafe, past, present or future, whether arising
                    under foreign, federal, state or local statutory and/or
                    common law, or whether based in contract, statute,
                    regulation, ordinance, tort (including, but not limited to,
                    fraud, misrepresentation, fraudulent inducement, negligence,
                    gross negligence or reckless behavior), deceptive or
                    fraudulent trade practices, deceptive or fraudulent business
                    practices, or any other legal or equitable theory, and
                    includes the validity, enforceability, or scope of these
                    Arbitration Terms (with the exception of the enforceability
                    of the Class Action Waiver clause below) (collectively, the
                    “Disputes”).
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">
                      • Resolución de Disputas Pre-Arbitraje.
                    </span>
                    Para todas las Disputas, primero debe darle a FinCENsafe la
                    oportunidad de resolver la Disputa. Debe comenzar este
                    proceso enviando una notificación escrita a 221 South Olive
                    Street, Denver, Colorado 80230-6947. Esa notificación
                    escrita debe incluir (1) su nombre, (2) su dirección, (3)
                    una descripción escrita de la Disputa, y (4) una descripción
                    del alivio específico que busca. Si FinCENsafe no resuelve
                    la Disputa a su satisfacción dentro de los ciento veinte
                    (120) días después de recibir su notificación escrita, puede
                    presentar su Disputa en arbitraje.
                  </>
                ) : (
                  <>
                    <span className="spann">
                      • Pre-Arbitration Dispute Resolution.
                    </span>
                    For all Disputes, you must first give FinCENsafe an
                    opportunity to resolve the Dispute. You must commence this
                    process by mailing written notification to 221 South Olive
                    Street, Denver, Colorado 80230-6947. That written
                    notification must include (1) your name, (2) your address,
                    (3) a written description of the Dispute, and (4) a
                    description of the specific relief you seek. If FinCENsafe
                    does not resolve the Dispute to your satisfaction within one
                    hundred and twenty (120) days after it receives your written
                    notification, you may pursue your Dispute in arbitration.
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">• Ley de Arbitraje Federal.</span>
                    Las partes acuerdan mutuamente resolver todas las Disputas
                    entre ellas exclusivamente mediante arbitraje final y
                    vinculante en lugar de presentar una demanda en los
                    tribunales. Esta disposición de arbitraje está regida por la
                    Ley Federal de Arbitraje (9 U.S.C. §§ 1-16) (“FAA”) y se
                    aplicará a todas las Disputas. Las partes también acuerdan
                    expresamente que estos Términos de Arbitraje se regirán por
                    la FAA incluso si usted y/o FinCENsafe y/o estos Términos de
                    Arbitraje están exentos de la FAA. Cualquier disputa al
                    respecto se resolverá exclusivamente por un árbitro. Si,
                    pero solo si, el árbitro determina que la FAA no se aplica,
                    se aplicarán las leyes del Estado de Colorado que rigen los
                    acuerdos de arbitraje.
                  </>
                ) : (
                  <>
                    <span className="spann">• Federal Arbitration Act.</span>
                    The parties each mutually agree to resolve all Disputes
                    between them exclusively through final and binding
                    arbitration instead of filing a lawsuit in court. This
                    arbitration provision is governed by the Federal Arbitration
                    Act (9 U.S.C. §§ 1-16) (“FAA”) and will apply to all
                    Disputes. The parties each also expressly agree that these
                    Arbitration Terms will be governed by the FAA even if you
                    and/or FinCENsafe and/or these Arbitration Terms is
                    otherwise exempted from the FAA. Any disputes in this regard
                    shall be resolved exclusively by an arbitrator. If, but only
                    if, the arbitrator determines the FAA does not apply, the
                    laws of the State of Colorado governing arbitration
                    agreements will apply.
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">
                      • Renuncia a Acción Colectiva.
                    </span>
                    Las partes acuerdan mutuamente que al entrar en estos
                    Términos de Arbitraje, ambas partes renuncian a su derecho a
                    que cualquier Disputa sea presentada, escuchada o arbitrada
                    como, o a participar en, una acción colectiva, acción
                    colectiva y/o acción representativa, y un árbitro no tendrá
                    autoridad para consolidar las reclamaciones de más de una
                    persona, y no podrá de otra manera escuchar o arbitrar
                    ninguna acción colectiva, colectiva o representativa
                    (“Renuncia a Acción Colectiva”). En cualquier caso en el que
                    (1) la Disputa se presente como una acción colectiva,
                    colectiva o representativa y (2) haya una determinación
                    judicial final de que toda o parte de la Renuncia a Acción
                    Colectiva es inaplicable, la acción colectiva, colectiva y/o
                    representativa en esa medida deberá litigar en un tribunal
                    civil de jurisdicción competente, pero la parte de la
                    Renuncia a Acción Colectiva que sea aplicable deberá hacerse
                    cumplir en arbitraje. No obstante cualquier otra cláusula
                    contenida en estos Términos de Arbitraje, cualquier
                    reclamación de que toda o parte de esta Renuncia a Acción
                    Colectiva es inaplicable, inejecutable, nula o anulable solo
                    puede ser determinada por un tribunal de jurisdicción
                    competente y no por un árbitro. Todas las demás disputas con
                    respecto a si esta disposición mutua de arbitraje es
                    inaplicable, inejecutable, aplicable, válida, nula o
                    anulable deberán ser determinadas exclusivamente por un
                    árbitro, y no por ningún tribunal.
                  </>
                ) : (
                  <>
                    <span className="spann">• Class Action Waiver.</span>
                    The parties each mutually agree that by entering into these
                    Arbitration Terms, both waive their right to have any
                    Dispute brought, heard or arbitrated as, or to participate
                    in, a class action, collective action and/or representative
                    action, and an arbitrator shall not have any authority to
                    consolidate more than one person’s claims, and may not
                    otherwise hear or arbitrate any class, collective or
                    representative action (“Class Action Waiver”). In any case
                    in which (1) the Dispute is filed as a class, collective or
                    representative action and (2) there is a final judicial
                    determination that all or part of the Class Action Waiver is
                    unenforceable, the class, collective and/or representative
                    action to that extent must be litigated in a civil court of
                    competent jurisdiction, but the portion of the Class Action
                    Waiver that is enforceable shall be enforced in arbitration.
                    Notwithstanding any other clause contained in these
                    Arbitration Terms, any claim that all or part of this Class
                    Action Waiver is unenforceable, unconscionable, void or
                    voidable may be determined only by a court of competent
                    jurisdiction and not by an arbitrator. All other disputes
                    with respect to whether this mutual arbitration provision is
                    unenforceable, unconscionable, applicable, valid, void or
                    voidable shall be determined exclusively by an arbitrator,
                    and not by any court.
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">
                      • Procedimientos de Arbitraje.
                    </span>
                    Cualquier Disputa se determinará mediante arbitraje final y
                    vinculante administrado por la Asociación Americana de
                    Arbitraje (“AAA”) bajo sus Reglas de Arbitraje para
                    Consumidores vigentes en el momento en que se inicie el
                    arbitraje. Si usted presenta una reclamación sujeta a
                    arbitraje, pagará hacia las tarifas y depósitos impuestos
                    por la AAA u otro árbitro solo un monto igual al monto que
                    hubiera tenido que pagar como tarifas de presentación y
                    costos iniciales en caso de haber presentado una demanda en
                    un tribunal de jurisdicción competente.
                  </>
                ) : (
                  <>
                    <span className="spann">• Arbitration Procedures.</span>
                    Any Dispute shall be determined by final and binding
                    arbitration administered by the American Arbitration
                    Association (“AAA”) under its then current Consumer
                    Arbitration Rules in effect at the time the arbitration is
                    initiated. If you bring a claim subject to arbitration, you
                    will pay toward the fees and deposits imposed by the AAA or
                    other arbitrator only an amount equal to the amount you
                    would have had to pay as filing fees and initial court costs
                    if you had filed suit in a court of competent jurisdiction.
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">• Ubicación del Arbitraje.</span>
                    Si se requiere una audiencia de arbitraje en persona, esta
                    se llevará a cabo en la Ciudad y el Condado de Denver,
                    Estado de Colorado. El árbitro o panel de arbitraje, según
                    sea el caso, aplicará y estará sujeto a esta sección y a
                    cualquier término adicional, y determinará cualquier Disputa
                    de acuerdo con la ley y los hechos aplicables basados en el
                    registro y ninguna otra base, y emitirá un laudo razonado.
                    Todas las cuestiones son para que el árbitro decida,
                    incluida la arbitrabilidad.
                  </>
                ) : (
                  <>
                    <span className="spann">• Location of Arbitration.</span>
                    If an in-person arbitration hearing is required, then it
                    will be conducted in the City and County of Denver, State of
                    Colorado. The arbitrator or arbitration panel, as the case
                    may be, will apply and be bound by this section and any
                    additional terms, and will determine any Dispute according
                    to applicable law and facts based upon the record and no
                    other basis, and will issue a reasoned award. All issues are
                    for the arbitrator to decide, including arbitrability.
                  </>
                )}
              </p>
            </li>
          </div>

          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              <div className="dot_img">
                {/* <img src="/dot_smal.png" className="" alt="" /> */}
              </div>
            </div>
            <li>
              <p>
                {toggle ? (
                  <>
                    <span className="spann">• Premios.</span> Excepto como se
                    establece en la Renuncia a Acción Colectiva, el árbitro
                    puede otorgar todos los recursos a los que una parte tiene
                    derecho bajo la ley aplicable y que de otro modo estarían
                    disponibles en un tribunal de justicia, pero no estará
                    facultado para otorgar recursos que no hubieran estado
                    disponibles en un tribunal de justicia para las
                    reclamaciones, contrarreclamaciones o defensas presentadas
                    en el arbitraje. El árbitro aplicará la ley sustantiva
                    estatal o federal, o ambas, según sea aplicable.
                  </>
                ) : (
                  <>
                    <span className="spann">• Awards.</span> Except as provided
                    in the Class Action Waiver, the arbitrator may award all
                    remedies to which a party is entitled under applicable law
                    and which would otherwise be available in a court of law,
                    but shall not be empowered to award any remedies that would
                    not have been available in a court of law for the claims,
                    counterclaims or defenses presented in arbitration. The
                    arbitrator shall apply the state or federal substantive law,
                    or both, as is applicable.
                  </>
                )}
              </p>
            </li>
          </div>
        </ul>
      </div>

      <p>
        <b>
          {toggle
            ? "10. Comunicaciones Electrónicas"
            : "10. Electronic Communications"}
        </b>
      </p>
      <p>
        {toggle
          ? "Las comunicaciones entre usted y FinCENsafe se realizan por medios electrónicos, ya sea que visite el sitio de FinCENsafe o envíe correos electrónicos a FinCENsafe, o use el Servicio, o si FinCENsafe publica avisos en el Sitio o se comunica con usted por correo electrónico. A efectos contractuales, usted (1) consiente en recibir comunicaciones de FinCENsafe en forma electrónica; y (2) acepta que todos los términos y condiciones, acuerdos, avisos, divulgaciones y otras comunicaciones que FinCENsafe le proporcione electrónicamente satisfacen cualquier requisito legal que dichas comunicaciones cumplirían si dichas comunicaciones fueran por escrito. Lo anterior no afecta sus derechos estatutarios. Cuando FinCENsafe requiera que usted proporcione una dirección de correo electrónico, usted es responsable de proporcionar a FinCENsafe su dirección de correo electrónico más actual. En caso de que la última dirección de correo electrónico que proporcionó a FinCENsafe no sea válida, o por cualquier motivo no sea capaz de entregar cualquier aviso requerido/permitido por los Términos, el envío del correo electrónico que contenga dicho aviso por parte de FinCENsafe seguirá constituyendo un aviso efectivo."
          : "The communications between you and FinCENsafe use electronic means, whether you visit the FinCENsafe Site or send FinCENsafe e-mails, or use the Service or whether FinCENsafe posts notices on the Site or communicates with you via e-mail. For contractual purposes, you (1) consent to receive communications from FinCENsafe in an electronic form; and (2) agree that all terms and conditions, agreements, notices, disclosures, and other communications that FinCENsafe provides to you electronically satisfy any legal requirement that such communications would satisfy if such communications were to be in writing. The foregoing does not affect your statutory rights. Where FinCENsafe requires that you provide an e-mail address, you are responsible for providing FinCENsafe with your most current e-mail address. In the event that the last e-mail address you provided to FinCENsafe is not valid, or for any reason is not capable of delivering to you any notices required/permitted by the Terms, FinCENsafe’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice."}
      </p>

      <p>
        <b>
          {toggle
            ? "11. Relación Contractual en Colorado"
            : "11. Colorado Contractual Relationship"}
        </b>
      </p>
      <p>
        {toggle
          ? "En la medida en que lo permita la ley aplicable, usted reconoce y acepta que la relación contractual creada por su pago de la tarifa requerida y su finalización y presentación de todo el BOI requerido es un contrato celebrado en el Estado de Colorado."
          : "To the greatest extent allowable by applicable law, you acknowledge and agree that the contractual relationship created by your payment of the required fee and your completion and submission of all required BOI is a contract entered into in the State of Colorado."}
      </p>

      <p>
        <b>{toggle ? "12. General" : "12. General"}</b>
      </p>
      <p>
        {toggle
          ? "Estos Términos y cualquier término adicional que podamos poner a disposición de vez en cuando a través de nuestras propiedades en Internet constituyen el acuerdo completo entre usted y FinCENsafe con respecto a su uso de nuestro Servicio y sustituyen y reemplazan cualquier acuerdo previo por escrito u oral sobre lo anterior. Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición en estos Términos no operará como una renuncia a dicho derecho o disposición. Si alguna disposición de los Términos se considera ilegal, nula o por cualquier motivo inaplicable, dicha disposición se considerará separable de los Términos y no afectará la validez y aplicabilidad de cualquier disposición restante. Ni los derechos ni las obligaciones que surjan de estos Términos son asignables por usted. Cualquier intento de asignación o transferencia será nulo y sin efecto. Podemos asignar nuestros derechos bajo estos Términos sin restricción."
          : "These Terms and any additional terms that we may make available from time to time through our Internet properties, constitute the entire agreement between you and FinCENsafe regarding your use of our Service and supersede and replace any prior written or oral agreements regarding the foregoing. Our failure to exercise or enforce any right or provision in these Terms shall not operate as a waiver of such right or provision. If any provision of the Terms is found to be unlawful, void or for any reason unenforceable, then such provision shall be deemed severable from the Terms and shall not affect the validity and enforceability of any remaining provisions. Neither the rights nor obligations arising under these Terms are assignable by you. Any such attempted assignment or transfer shall be void and without effect. We may assign our rights under these Terms without restriction."}
      </p>

      <div
  style={{
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
  }}
>
  <button
    type="button"
    style={{ backgroundColor: "#5b5959" }}
    class="btn btn-primary px-4 py-1"
    id="flexCheckDefault"
    data-bs-dismiss="modal"
    aria-label="Close"
  >
    {toggle ? "Cerrar" : "Close"}
  </button>
  <button
    type="button"
    class="btn btn-primary px-4 py-1"
    id="flexCheckDefault"
    data-bs-dismiss="modal"
    aria-label="Close"
    onClick={()=>{setReadStepZeroTerms && setReadStepZeroTerms(true) ; setFormData({...formData , isCheckedLeadCapture : true})}}
  >
    {toggle ? "Acepto los términos y condiciones" : "I Accept Terms and Conditions"}
  </button>
</div>

    </div>
  );
}

export default TermsAndConditionContent;