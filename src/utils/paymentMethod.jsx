import axios from "axios";

const handleRazorPay = async (data, amount) => {
  const key = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}api/v1/getKey`
  );
  const response = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}api/v1/createorder`,
    { amount }
  );

  const options = {
    key: key.data.message,
    amount: response.data.message.amount,
    currency: "INR",
    name: "Yours Hospitality",
    description: "Test Transaction",
    image: "https://yh-fe-v2.vercel.app/mainLogo.png",
    order_id: response.data.message.id,
    callback_url: `${import.meta.env.VITE_APP_API_URL}api/v1/payments`,
    prefill: {
      name: "Yours Hospitality Service",
      email: "testing@example.com",
      contact: "9000090000",
    },
    notes: data,
    theme: {
      color: "#20b131",
    },
  };
  const razorPaypopup = new window.Razorpay(options);
  razorPaypopup.open();
};

export default handleRazorPay;
