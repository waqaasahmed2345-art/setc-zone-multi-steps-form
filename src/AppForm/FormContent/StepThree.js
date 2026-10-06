import React from 'react'
import CheckoutForm from '../Strip/CheckoutForm'
import { Button } from '@mui/material'

const StepThree = (props) => {
  const { formData, errors, handleInputChange, handleNext, loader } = props;

    return (
    <div class="container mt-5">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-12">
                <div style={{padding : "3%" ,borderRadius: '18px', background : "repeating-radial-gradient(#0097B2, transparent 100px)"}}>
                  <div style={{backgroundColor : "#ffffff"}}>
                      <CheckoutForm token={localStorage.getItem('token')}/>
                  </div>
                   
                </div>
                  
                 {/* <div style={{ display: 'flex',padding: '0px 0px 10px 0px', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
      <Button
        variant="contained"
        style={{
          padding: '10px 60px', // Adjust padding as needed
          backgroundColor: '#FF5C36', // Change the background color as needed
        }}
        onClick={handleNext}
      >
       next
      </Button>
    </div>  */}
             
            </div>
          </div>
        </div>
  )
}

export default StepThree
