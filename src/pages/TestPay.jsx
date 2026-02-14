import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import {
  completePayment,
  createPaymentOrder,
  initializeRazorpay,
} from "../lib/payment-client";

export default function TestPay() {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (!isAuthenticated) {
      setMessage("Error: Please login first");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Step 1: Create payment order
      const orderData = await createPaymentOrder({
        userId: user.id,
        amount: 50000,
        eventId: "event1",
        teamId: "team-1",
        passTypeId: "1",
        accommodationTypeId: null,
      });

      setMessage(`Order created: ${orderData.orderId}`);

      // Step 2: Initialize Razorpay
      await initializeRazorpay(
        orderData,
        {
          name: user.name || user.firstName + " " + user.lastName,
          email: user.email,
          contact: user.contact || "",
        },
        "event",
        async (response) => {
          try {
            // Step 3: Verify payment
            const verifyResult = await completePayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user.id,
            });
            setMessage(
              `Success: ${verifyResult.message} (Transaction ID: ${verifyResult.transactionId})`,
            );
          } catch (error) {
            setMessage(`Error: ${error.message}`);
          }
        },
        (error) => {
          setMessage(`Error: ${error}`);
        },
      );
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen justify-center flex">
      <h1>Test Payment</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Click to Pay"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
