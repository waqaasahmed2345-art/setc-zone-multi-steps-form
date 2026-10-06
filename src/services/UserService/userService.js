import Swal from "sweetalert2";
import axios from "../../axios/axios";
import { BASE_URL } from '../../Config/config';
import { setToken, setUserDetails } from "../../Redux/Slices/userSlice";



const api = axios.create({
  baseURL: BASE_URL,
});

export const createUser = async (userData) => {
  try {
    const response = await api.post('/user/create', userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/user/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};


// Lead Capture Service Call

const handleToken = (token, dispatch) => {

  localStorage.setItem("token", token);
  // const existingToken = localStorage.getItem('token');
  // if (!existingToken) {
  //   localStorage.setItem('token', token);
  // }
  dispatch(setToken(token));
  
};


export const leadCapture = async (step, formData, dispatch) => {
  try {
    const response = await axios.post(
      "user/create",
      {
        step: step,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.businessName,
        business_address: formData.company_name,
        know_about_us: formData.businessAddress,
      }
    );

    if (response.status === 201) {

      const data = response.data;
      handleToken(data.user.token, dispatch);
      dispatch(setUserDetails({ fName: data?.user?.name }));
      return data; // Return the data after successful response

    } else {
      if (response.status === 400) {
        // Show error alert for bad request
        // alert("Bad request: " + response.data.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User with this email already exist.",
        });
      }
    }
  } catch (error) {
    // Handle network error
    console.error("Network error", error);
  }
};






// // Add more API functions as needed

 export default api;
