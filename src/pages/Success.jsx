import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return (
    <>
      {searchParams.get("success") ? (
        <div className="success">
          <img src="/success.svg" className="success-img" />
          <div>
            <h1>Payment Success!</h1>
            <p>Thank you for choosing us!</p>
            <p>
              We have received your booking request. We will contact you
              shortly.
            </p>
            <h5>Transaction Id: {searchParams.get("reference")}</h5>
            <h6>
              Go to <a href="/trips">My Trips</a>
            </h6>
          </div>
        </div>
      ) : (
        <div className="success">
          <img src="/error.svg" className="success-img" />
          <div>
            <h1>Payment Failed!</h1>
            <p>Some thing went wrong in payment. Please try again.</p>
            <h5>Transaction Id: {searchParams.get("reference")}</h5>
            <h6>
              or Contact with us <a href="/support">Contact</a> will get back to
              you soon!
            </h6>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
