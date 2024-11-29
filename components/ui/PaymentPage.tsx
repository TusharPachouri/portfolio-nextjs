"use client";
import React, { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const AMOUNT = 100;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", { method: "POST" });
      const data = await response.json();

      const option = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "Tushar Pachouri",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: function (response: any) {
          console.log("Payment successful", response);
          // Add your logic here
        },
        prefill: {
          name: "Tushar Pachouri",
          email: "tusharpachouri001@gmail.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(option);
      rzp1.open();
    } catch (error) {
      console.error("Error while processing payment", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <script
        src="https://checkout.razorpay.com/v1/checkout.js"
      ></script>
      {/* <div className="p-6 bg-white rounded-lg shadow-md"> */}
       
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full px-4 py-2 rounded-md text-white font-bold transition duration-300 
            ${
              isProcessing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transform hover:scale-105"
            }`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </div>
    // </div>
  );
};

export default PaymentPage;
