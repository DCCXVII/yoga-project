import React, { useState } from "react";
import Swal from "sweetalert2";
import { CreditCardIcon } from "@primer/octicons-react";
import "../../instructor/dashboard/main/courses/style/CreateCoursePack.css";
function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and payment processing here
    if (name && cardNumber && expiry && cvc) {
      // Payment successful
      Swal.fire(
        "Payment Successful!",
        "Thank you for your payment.",
        "success"
      );
    } else {
      // Payment failed
      Swal.fire(
        "Payment Failed",
        "Please fill in all the required fields.",
        "error"
      );
    }
  };

  return (
    <div className="create-course-container">
      <div className="container">
        <div className="create-course-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Le nom titulaire</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Numero de Carte</label>
              <input
                type="text"
                className="form-control"
                placeholder="× × × ×    × × × ×    × × × ×    × × × ×"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Date d'expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="mm / yy"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">cvc</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="× × ×"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <button type="submit" className="create-course-btn">
                Payer <CreditCardIcon className="icon" size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
