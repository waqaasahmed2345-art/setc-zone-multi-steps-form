// User GET

export const getUserInfo =  ({ userData, setUserData, setActiveStep, setSSN, setFormData, setApplicants, setCompanyApplicants, shouldReloadSingleFile  }) => {
    const { step, strip_payment, Application_completed, securityKey, beneficial_owners, ...rest } = userData;

    setUserData(userData);

    const currentStep = step || 0;

    if (currentStep === 0) {
        setActiveStep(currentStep + 1);
    } else if (strip_payment !== null && Application_completed !== "true") {
      setActiveStep(5);
      // setOpenModal(true); 
      window.location.href = "https://calendly.com/bill-williamhorourke";
         // Swal.fire({
              //   title: "Payment Success",
              //   text: "After a successful payment, please proceed to the next.",
              //   icon: "success",
              //   showClass: {
              //     popup: `
              //         animate__animated
              //         animate__fadeInUp
              //         animate__faster
              //       `,
              //   },
              //   hideClass: {
              //     popup: `
              //         animate__animated
              //         animate__fadeOutDown
              //         animate__faster
              //       `,
              //   },
              //   confirmButtonText: "Continue",
              //   confirmButtonColor: "#27AE60", // Set your desired background color
              //   customClass: {
              //     confirmButton: "your-custom-class-here", // Define your custom class for button styling
              //   },
              // });
    } else if (Application_completed === "true") {
      setActiveStep(5);
    } else {
      setActiveStep(currentStep);
    }

    setSSN(securityKey);
    // setFormData(prevData => ({ ...prevData, ...rest }));
    setFormData((prevData) => ({
        ...prevData,
        name: userData.name || prevData.name,
        email: userData.email || prevData.email,
        phone: userData.phone || prevData.phone,
        businessName: userData.business_name || prevData.businessName,
        company_name: userData.business_address || prevData.business_address,
        businessAddress: userData.know_about_us || prevData.know_about_us,
        trade_name: userData.trade_name || prevData.trade_name,
        business_StAddress: userData.business_StAddress || prevData.business_StAddress,
        state_registration: userData.state_registration || prevData.state_registration,
        date_of_formation: userData.date_of_formation || prevData.date_of_formation,
        taxpayer_idNum: userData.taxpayer_idNum || prevData.taxpayer_idNum,
        applicant_name: userData.applicant_name || prevData.applicant_name,
        applicant_dob: userData.applicant_dob || prevData.applicant_dob,
        applicant_address: userData.applicant_address || prevData.applicant_address,
        applicant_passportNum: userData.applicant_passportNum || prevData.applicant_passportNum,
        //   isCheckedStepThree: userData.self_employed_from === "Yes" ? true : false || false,
        // Add other fields accordingly
      }));

    if (beneficial_owners?.length > 0 && !shouldReloadSingleFile) {
      setApplicants(beneficial_owners.map(applicant => ({
        ...applicant,
        driver_licence_front: applicant.driver_licence_front,
        driver_licence_front_name: applicant.driver_licence_front_name,
        driver_licence_back: applicant.driver_licence_back,
        driver_licence_back_name: applicant.driver_licence_back_name,
      })));
    }

    setCompanyApplicants(prevSelectedFiles => ({
      ...prevSelectedFiles,
      applicant_driver_licence_front: userData.driver_licence_front,
      applicant_driver_licence_back: userData.driver_licence_back,
    }));
  };
