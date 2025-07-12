import { useEffect } from "react";

function Payment() {
  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const amount = 500;

    // 1. Create order on your backend
    const orderResponse = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const orderData = await orderResponse.json();

    // 2. Configure Razorpay options
    const options = {
      key: "rzp_test_j3dYWKRUu4qxU8", // Replace with your actual test key
      amount: orderData.amount,
      currency: orderData.currency,
      name: "My Test Store",
      description: "Test Payment",
      order_id: orderData.id,
      handler: async function (response) {
        alert("✅ Payment Successful!");

        // 3. Update payment on backend
        await fetch("http://localhost:5000/api/payment/update-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_id: orderData.id,
            payment_id: response.razorpay_payment_id,
            status: "paid",
          }),
        });
      },
      theme: {
        color: "#3399cc",
      },
    };

    // 4. Launch Razorpay payment modal
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <h1>Pay with Razorpay</h1>
      <button id="pay-btn" onClick={handlePayment}>Pay ₹500</button>
    </>
  );
}

export default Payment;
