import axios from 'axios';
import Swal from 'sweetalert2'; 
import { BASE_URL } from '../Config/config';

const instance = axios.create({
  baseURL: BASE_URL, // Replace this with your desired base URL
});


instance.interceptors.request.use(config => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

instance.interceptors.response.use(
    response => response,
    async (error) =>  {
      const status = error.response ? error.response.status : null;
      
      if (status === 401) {
     
        // Handle unauthorized access
        console.log("Unauthorized access");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'Your session has timed out. Please log in again.',
            showCancelButton: false,
            confirmButtonText: 'OK',
            // cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
              
                //  dispatch(removeToken());
                localStorage.clear();
              
                window.location.href="https://fincensafe.com"
               
            } else {
              // User clicked Cancel or closed the popup
              // Handle accordingly
            }
        });
      } else if (status === 404) {
        // Handle not found error

        console.log("Post not found");
      } else {
        // Handle other errors
        console.error("An error occurred:", error);
      }
      
      return Promise.reject(error);
    }
  );

export default instance;