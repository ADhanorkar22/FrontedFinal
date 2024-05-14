// import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import Swal from "sweetalert2";

// export default function Rcreditcard() {
//   const [creditCardNumber, setCreditCardNumber] = useState("");
//   const [billAmount, setBillAmount] = useState("");
//   const [operator, setOperator] = useState(""); // Assuming operator needs to be filled later
//   const [totalAmount, setTotalAmount] = useState(0); // Initialize with 0

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     if (name === "creditcardnumber") {
//       setCreditCardNumber(value);
//     } else if (name === "billAmount") {
//       setBillAmount(value);
//     }
//   };

//   const handleConfirmClick = () => {
//     // Calculate total amount and set operator here
//     const calculatedTotalAmount = parseFloat(billAmount); // Assuming no operator is applied
//     setTotalAmount(calculatedTotalAmount);

//     // Show SweetAlert popup with payment details
//     Swal.fire({
//       title: "Credit Card Payment Details",
//       html: `
//         <p>Credit Card Number: ${creditCardNumber}</p>
//         <p>Bill Amount: ₹${billAmount}</p>
//         <p>Total Amount: ₹${totalAmount}</p>
//       `,
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Make Payment",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Perform action for making payment
//         // This is a placeholder function
//         console.log("Payment made!");
//       }
//     });
//   };

//   return (
//     <form className="main-container">
//       <p className="text-3xl font-bold text-white ">Retailer Services</p>
//       <div className="flex mt-4">
//         {/* Credit Card Payment Section */}
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-white ml-4">
//           <p className="text-[#0000FF] text-2xl font-bold">
//             Credit Card Payment
//           </p>
//           <div className="mt-4 w-full">
//             <p className="text-[#0000FF] ">Credit Card Number</p>
//             <TextField
//               type="number"
//               placeholder="Credit Card Number"
//               name="creditcardnumber"
//               value={creditCardNumber}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Bill Amount</p>
//             <TextField
//               type="number"
//               placeholder="₹ Bill Amount"
//               name="billAmount"
//               value={billAmount}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>

//           <Button
//             className="px-4 py-3 w-3/4 bg-[#0000FF] mt-8 text-white rounded-md text-xl"
//             onClick={handleConfirmClick}
//           >
//             Confirm
//           </Button>
//         </span>
//       </div>
//     </form>
//   );
// }

// //.................................................................import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

export default function Rcreditcard() {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0); // Initialize with 0

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "creditcardnumber") {
      setCreditCardNumber(value);
    } else if (name === "billAmount") {
      setBillAmount(value);
    }
  };

  const handleConfirmClick = () => {
    // Calculate total amount here
    const calculatedTotalAmount = parseFloat(billAmount); // Assuming no additional calculations needed
    setTotalAmount(calculatedTotalAmount);

    // Show SweetAlert popup with payment details
    Swal.fire({
      title: "Credit Card Payment Details",
      html: `
        <p>Credit Card Number: ${creditCardNumber}</p>
        <p>Bill Amount: ₹${billAmount}</p>
        <p>Total Amount: ₹${calculatedTotalAmount}</p>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Make Payment",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("User confirmed payment.");
        // Call API to initiate payment
        initiatePayment();
      } else {
        console.log("User canceled payment.");
      }
    });
  };

  const initiatePayment = () => {
    // API endpoint to initiate payment
    const url = "https://ipaisa.site/initiate-payment";
    // Data to send in the request
    const requestData = {
      creditCardNumber: creditCardNumber,
      billAmount: billAmount,
    };

    // Send POST request to API
    console.log("Sending payment initiation request:", requestData);
    axios
      .post(url, requestData)
      .then((response) => {
        // Handle response from API
        console.log("Payment response:", response.data);
        // Check if payment gateway URL is available in the response
        const paymentUrl = response.data.paymentUrl;
        if (paymentUrl) {
          console.log("Payment gateway URL received:", paymentUrl);
          // Redirect the user to the payment gateway
          window.location.href = paymentUrl;
        } else {
          // Handle case where payment gateway URL is not available
          console.error("Payment gateway URL not found in response");
          Swal.fire({
            icon: "error",
            title: "Payment Failed",
            text: "An error occurred while processing your payment. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.error("Payment error:", error);
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: "An error occurred while processing your payment. Please try again later.",
        });
      });
  };

  return (
    <form className="main-container">
       <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10  mb-2 border-start-start-radius: 9999px;">
            <p className="font-bold text-5xl text-[#0B12B7]">
              Streamlined Credit Card Payments
            </p>

            <p className="mt-8 text-2xl ">
            Effortlessly manage your finances by settling credit card bills with ease, ensuring financial peace of mind.
            </p>
          </span>
      <p className="text-3xl font-bold text-white ">Retailer Services</p>
      <div className="flex mt-4">
        {/* Credit Card Payment Section */}
        <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-white ml-4 ">
          <p className="text-[#0000FF] text-2xl font-bold">
            Credit Card Payment
          </p>
          <div className="mt-4 w-full">
            <p className="text-[#0000FF] ">Credit Card Number</p>
            <TextField
              type="number"
              placeholder="Credit Card Number"
              name="creditcardnumber"
              value={creditCardNumber}
              onChange={handleChange}
              className="w-3/4 bg-white rounded-md mt-2"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <div className="mt-3 w-full">
            <p className="text-[#0000FF]">Bill Amount</p>
            <TextField
              type="number"
              placeholder="₹ Bill Amount"
              name="billAmount"
              value={billAmount}
              onChange={handleChange}
              className="w-3/4 bg-white rounded-md mt-2"
              inputProps={{
                style: {
                  height: "5px",
                },
              }}
            />
          </div>
          <Button
            className="px-4 py-3 w-3/4 bg-[#0000FF] mt-8 text-white rounded-md text-xl  hover:bg-green-500 hover:text-black"
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
        </span>
      </div>
    </form>
  );
}
// //.........mob&email
// import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import Swal from "sweetalert2";
// import axios from "axios";

// export default function Rcreditcard() {
//   const [creditCardNumber, setCreditCardNumber] = useState("");
//   const [billAmount, setBillAmount] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [totalAmount, setTotalAmount] = useState(0); // Initialize with 0

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     if (name === "creditcardnumber") {
//       setCreditCardNumber(value);
//     } else if (name === "billAmount") {
//       setBillAmount(value);
//     } else if (name === "mobileNumber") {
//       setMobileNumber(value);
//     } else if (name === "email") {
//       setEmail(value);
//     }
//   };

//   const handleConfirmClick = () => {
//     // Calculate total amount and set operator here
//     const calculatedTotalAmount = parseFloat(billAmount); // Assuming no operator is applied
//     setTotalAmount(calculatedTotalAmount);

//     // Show SweetAlert popup with payment details
//     Swal.fire({
//       title: "Credit Card Payment Details",
//       html: `
//         <p>Credit Card Number: ${creditCardNumber}</p>
//         <p>Bill Amount: ₹${billAmount}</p>
//         <p>Total Amount: ₹${totalAmount}</p>
//         <p>Mobile Number: ${mobileNumber}</p>
//         <p>Email: ${email}</p>
//       `,
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Make Payment",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Call API to initiate payment
//         initiatePayment();
//       }
//     });
//   };

//   const initiatePayment = () => {
//     // API endpoint to initiate payment
//     const url = "https://api.ipaisa.site/initiate-payment";
//     // Data to send in the request
//     const requestData = {
//       creditCardNumber: creditCardNumber,
//       billAmount: billAmount,
//       mobileNumber: mobileNumber,
//       email: email,
//     };

//     // Send POST request to API
//     axios
//       .post(url, requestData)
//       .then((response) => {
//         // Handle response from API
//         console.log("Payment response:", response.data);
//         // Check if payment gateway URL is available in the response
//         const paymentUrl = response.data.paymentUrl;
//         if (paymentUrl) {
//           // Redirect the user to the payment gateway
//           window.location.href = paymentUrl;
//         } else {
//           // Handle case where payment gateway URL is not available
//           console.error("Payment gateway URL not found in response");
//           Swal.fire({
//             icon: "error",
//             title: "Payment Failed",
//             text: "An error occurred while processing your payment. Please try again later.",
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Payment error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Payment Failed",
//           text: "An error occurred while processing your payment. Please try again later.",
//         });
//       });
//   };

//   return (
//     <form className="main-container">
//       <p className="text-3xl font-bold text-white ">Retailer Services</p>
//       <div className="flex mt-4">
//         {/* Credit Card Payment Section */}
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-white ml-4">
//           <p className="text-[#0000FF] text-2xl font-bold">
//             Credit Card Payment
//           </p>
//           <div className="mt-4 w-full">
//             <p className="text-[#0000FF] ">Credit Card Number</p>
//             <TextField
//               type="number"
//               placeholder="Credit Card Number"
//               name="creditcardnumber"
//               value={creditCardNumber}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Bill Amount</p>
//             <TextField
//               type="number"
//               placeholder="₹ Bill Amount"
//               name="billAmount"
//               value={billAmount}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Mobile Number</p>
//             <TextField
//               type="text"
//               placeholder="Mobile Number"
//               name="mobileNumber"
//               value={mobileNumber}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Email</p>
//             <TextField
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <Button
//             className="px-4 py-3 w-3/4 bg-[#0000FF] mt-8 text-white rounded-md text-xl"
//             onClick={handleConfirmClick}
//           >
//             Confirm
//           </Button>
//         </span>
//       </div>
//     </form>
//   );
// }

//................................................................

// import React, { useState } from "react";
// import { TextField, Modal, Button } from "@mui/material";
// import Swal from "sweetalert2";

// export default function Rcreditcard() {
//   const [creditCardNumber, setCreditCardNumber] = useState("");
//   const [billAmount, setBillAmount] = useState("");
//   const [operator, setOperator] = useState(""); // Assuming operator needs to be filled later
//   const [totalAmount, setTotalAmount] = useState(0); // Initialize with 0
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     if (name === "creditcardnumber") {
//       setCreditCardNumber(value);
//     } else if (name === "billAmount") {
//       setBillAmount(value);
//     }
//   };

//   const handleConfirmClick = () => {
//     // Calculate total amount and set operator here
//     const calculatedTotalAmount = parseFloat(billAmount); // Assuming no operator is applied
//     setTotalAmount(calculatedTotalAmount);
//     setShowPopup(true);
//   };

//   const handleMakePaymentClick = () => {
//     // Perform action for making payment
//     // This is a placeholder function
//     console.log("Payment made!");
//     // Close the popup
//     setShowPopup(false);
//   };

//   return (
//     <form className="main-container">
//       <p className="text-3xl font-bold text-white ">Retailer Services</p>
//       <div className="flex mt-4">
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5]">
//           <p className="text-[#0D6EFD] text-xl font-bold">
//             Trusted by over 140M customers
//           </p>
//           <div className="mt-8">
//             <p className="text-[#6610f2] text-2xl font-bold">
//               Streamlined Credit Card Payments
//             </p>
//             <p className="mt-8 text-black text-2xl">
//               Effortlessly manage your finances by settling credit card bills
//               with ease, ensuring financial peace of mind.
//             </p>
//           </div>
//         </span>
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-white ml-4">
//           <p className="text-[#0000FF] text-2xl font-bold">
//             Credit Card Payment
//           </p>
//           <div className="mt-4 w-full">
//             <p className="text-[#0000FF] ">Credit Card Number</p>
//             <TextField
//               type="number"
//               placeholder="Credit Card Number"
//               name="creditcardnumber"
//               value={creditCardNumber}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Bill Amount</p>
//             <TextField
//               type="number"
//               placeholder="₹ Bill Amount"
//               name="billAmount"
//               value={billAmount}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>

//           <button
//             className="px-4 py-3 w-3/4 bg-[#0000FF] mt-8 text-white rounded-md text-xl"
//             onClick={handleConfirmClick}
//           >
//             Confirm
//           </button>
//         </span>
//       </div>
//       <Modal open={showPopup} onClose={() => setShowPopup(false)}>
//         <div className="modal-content">
//           <h2>Credit Card Payment Details</h2>
//           <p>Credit Card Number: {creditCardNumber}</p>
//           <p>Bill Amount: ₹{billAmount}</p>
//           <p>Operator: {operator}</p>
//           <p>Total Amount: ₹{totalAmount}</p>
//           <Button variant="contained" onClick={handleMakePaymentClick}>
//             Make Payment
//           </Button>
//         </div>
//       </Modal>
//     </form>
//   );
// }

//popup

// import { TextField } from "@mui/material";
// import { useRouter } from "next/router";
// import React from "react";

// export default function Rcreditcard() {
//   const router = useRouter();
//   return (
//     <form className="main-container">
//       <p className="text-3xl font-bold text-white ">Retailer Services</p>
//       <div className="flex mt-4">
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5]">
//           <p className="text-[#0D6EFD] text-xl font-bold">
//             Trusted by over 140M customers
//           </p>
//           <div className="mt-8">
//             <p className="text-[#6610f2] text-2xl font-bold">
//               Streamlined Credit Card Payments
//             </p>
//             <p className="mt-8 text-black text-2xl">
//               Effortlessly manage your finances by settling credit card bills
//               with ease, ensuring financial peace of mind.
//             </p>
//           </div>
//         </span>
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-white ml-4">
//           <p className="text-[#0000FF] text-2xl font-bold">
//             Credit Card Payment
//           </p>
//           <div className="mt-4 w-full">
//             <p className="text-[#0000FF] ">Credit Card Number</p>
//             <TextField
//               type="number"
//               placeholder="Credit Card Number"
//               name="creditcardnumber"
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Bill Amount</p>
//             <TextField
//               type="number"
//               placeholder="₹ Bill Amount"
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>

//           <button
//             className="px-4 py-3 w-3/4 bg-[#0000FF] mt-8 text-white rounded-md text-xl"
//             onClick={() => {
//               router.push("/popuprcreditcard");
//             }}
//           >
//             Confirm
//           </button>
//         </span>
//       </div>
//     </form>
//   );
// }
//endpopup

// import { TextField } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";

// export default function Rcreditcard() {
//   const [creditCardData, setCreditCardData] = useState({
//     creditCardNumber: "",
//     billAmount: "",
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setCreditCardData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const initiatePayment = async () => {
//     try {
//       const response = await axios.post(
//         "https://api.ipaisa.site/initiate-payment",
//         { ...creditCardData } // Use credit card data here
//       );
//       console.log("Response from backend:", response.data); // Response from backend
//       if (response.data.status === 1) {
//         // Access key received, use it as needed
//         const accessKey = response.data.data;
//         console.log("Access Key:", accessKey);
//         // Redirect user to Easebuzz payment gateway
//         const redirectURL = `https://pay.easebuzz.in/pay/${accessKey}`;
//         console.log("Redirect URL:", redirectURL);
//         window.location.href = redirectURL;
//       } else {
//         console.error("Access key not received from backend");
//       }
//     } catch (error) {
//       console.error("Error initiating payment:", error);
//       // Handle error
//     }
//   };

//   const handleConfirmClick = () => {
//     console.log("Credit Card Data:", creditCardData); // Check credit card data before initiating payment
//     // Call initiatePayment function when Confirm button is clicked
//     initiatePayment();
//   };

//   return (
//     <form className="main-container">
//       <p className="text-3xl font-bold text-white ">Retailer Services</p>
//       <div className="flex mt-4">
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-[#ddf1f5]">
//           <p className="text-[#0D6EFD] text-xl font-bold">
//             Trusted by over 140M customers
//           </p>
//           <div className="mt-8">
//             <p className="text-[#6610f2] text-2xl font-bold">
//               Streamlined Credit Card Payments
//             </p>
//             <p className="mt-8 text-black text-2xl">
//               Effortlessly manage your finances by settling credit card bills
//               with ease, ensuring financial peace of mind.
//             </p>
//           </div>
//         </span>
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 bg-white ml-4">
//           <p className="text-[#0000FF] text-2xl font-bold">
//             Credit Card Payment
//           </p>
//           <div className="mt-4 w-full">
//             <p className="text-[#0000FF] ">Credit Card Number</p>
//             <TextField
//               type="number"
//               placeholder="Credit Card Number"
//               name="creditCardNumber"
//               value={creditCardData.creditCardNumber}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>
//           <div className="mt-3 w-full">
//             <p className="text-[#0000FF]">Bill Amount</p>
//             <TextField
//               type="number"
//               placeholder="₹ Bill Amount"
//               name="billAmount"
//               value={creditCardData.billAmount}
//               onChange={handleChange}
//               className="w-3/4 bg-white rounded-md mt-2"
//               inputProps={{
//                 style: {
//                   height: "5px",
//                 },
//               }}
//             />
//           </div>

//           <button
//             className="px-4 py-3 w-3/4 bg-[#0000FF] mt-8 text-white rounded-md text-xl"
//             onClick={handleConfirmClick}
//           >
//             Confirm
//           </button>
//         </span>
//       </div>
//     </form>
//   );
// }
