import React from 'react'

const StepOne = ({ formData, errors, handleInputChange, handleNext, loader , toggle}) => {
  console.log(toggle)
    return (
    <div class="container mt-5"  >
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <form id="regForm border-0" >
       
          

        <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="card" style={{ marginTop: 70 }}>
        <div className="card-body">
          <h5 className="card-title">{toggle ? "Pasos:" : "Steps:"}</h5>
          <ol className="step-list">
            <li>{toggle ? "Firma el acuerdo del cliente, autorizándonos a presentar en tu nombre." : "Sign the client agreement, authorizing us to file on your behalf."}</li>
            <li style={{ marginTop: 12 }}>{toggle ? "Paga la tarifa de presentación de $150." : "Pay the $150 filing fee."}</li>
            <li style={{ marginTop: 12 }}>{toggle ? "Completa el formulario de admisión." : "Complete the Intake Form."}</li>
            <li style={{ marginTop: 12 }}>{toggle ? "Relájate y nosotros nos encargamos de tu presentación." : "You relax, and we take care of your filing."}</li>
            <li style={{ marginTop: 12 }}>{toggle ? "Recibirás la confirmación de la presentación completada." : "You receive confirmation of completed filing."}</li>
          </ol>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
            <button disabled={loader} type="button" className="btn btn-lg custom-btn" onClick={handleNext}>
              {toggle ? "Aceptar" : "OK"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default StepOne
