import React, { useState, useEffect } from "react";
import { Navigate , useNavigate } from "react-router-dom";

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  const naviagate = useNavigate()

  // useEffect(() => {
  //   const fetchSessionData = async () => {
  //     try {
  //       const queryString = window.location.search;
  //       const urlParams = new URLSearchParams(queryString);
  //       const sessionId = urlParams.get('session_id');

  //       const response = await fetch(`http://localhost:5001/user?session_id=${sessionId}`);
  //       const data = await response.json();

  //       setStatus(data.status);
  //       setCustomerEmail(data.customer_email);
  //     } catch (error) {
  //       console.error("Error fetching session data:", error);
  //     }
  //   };

  //   fetchSessionData();
  // }, []);

  useEffect(() => {
    const fetchSessionStatus = async () => {
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');

        const response = await fetch(`https://fincen.ccalerc.com/api/user/session-status?session_id=${sessionId}`);
        const data = await response.json();

        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      } catch (error) {
        console.error("Error fetching session status:", error);
      }
    };
    fetchSessionStatus();
  }, []);

  console.log("Status is ssssssss" , status)

  const handleContinue = () => {
    naviagate("/getStarted")
  };

  if (status === 'open') {
    return <Navigate to="/" />;
  }


  if (status === 'complete') {
    naviagate("/getStarted")
  }

  return null;
};

export default Return;