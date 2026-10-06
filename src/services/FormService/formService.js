import { BASE_URL } from "../../Config/config";
import axios from "../../axios/axios";

// Form Update Service Call

export const updateForm = async (step, formData, ssn) => {
  try {
    const response = await axios.put(`user/${step}/updateuser`, {
      company_name: formData.company_name,
      trade_name: formData.trade_name,
      business_StAddress: formData.business_StAddress,
      state_registration: formData.state_registration,
      date_of_formation: formData.date_of_formation,
      taxpayer_idNum: formData.taxpayer_idNum,
      Application_completed: "true",
      applicant_name: formData.applicant_name,
      applicant_dob: formData.applicant_dob,
      applicant_address: formData.applicant_address,
      applicant_passportNum: formData.applicant_passportNum,
      securityKey: ssn,
    });

    if (response.status === 200) {
      const data = response.data;
      return data; // Return the data after successful response
    } else {
      // Handle non-200 status
    }
  } catch (error) {
    // Handle network error
    console.error("Network error", error);
  }
};

// Adding Beneficials 

export const addBeneficialsApplicants = async (newApplicant) => {
    const lastIndexObject = newApplicant[newApplicant?.length - 1];

    if (typeof lastIndexObject.driver_licence_front !== "string") {
      const formData = new FormData();
      const token = localStorage.getItem("token");
      // Append non-file properties to formData
      Object.keys(lastIndexObject).forEach((key) => {
        if (
          typeof lastIndexObject[key] !== "object" ||
          lastIndexObject[key] instanceof File
        ) {
          formData.append(key, lastIndexObject[key]);
        }
      });

    try {
      const response = await axios.put(`user/benificial-form-data`, formData);
  
      if (response.status === 200) {
        const data = response.data;
        return data; // Return the data after successful response
      } else {
        // Handle non-200 status
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  } 
};


// File Upload Company Applicant 

export const fileChangeApplicant = async (field, file) => {
    const formData = new FormData();
    let url = ""; // Initialize an empty URL variable

    // Determine the URL based on the field
    if (field === "applicant_driver_licence_front") {
      formData.append("driver_licence_front", file);
      url = "user/driver_licence_front";
    } else if (field === "applicant_driver_licence_back") {
      formData.append("driver_licence_back", file);
      url = "user/driver_licence_back";
    }
    // else if (field === "applicant_security_card_front") {
    //   formData.append("security_card_front", file);
    //   url = "https://fincen.ccalerc.com/api/user/security_card_front";
    // } else if (field === "applicant_security_card_back") {
    //   formData.append("security_card_back", file);
    //   url = "https://fincen.ccalerc.com/api/user/security_card_back";
    // }

    try {
      const response = await axios.put(url, formData);
  
      if (response.status === 200) {
        const data = response.data;
        return data; // Return the data after successful response
      } else {
        // Handle non-200 status
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  } ;


  // apiService.js
export const callApi = async ( data) => {
    const url = `${BASE_URL}user/viewFile`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error.message);
      throw error;
    }
  };
  


 // Add more API functions as needed
