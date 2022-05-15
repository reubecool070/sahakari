import React, { useState } from "react";
import { loanRates } from "../data";

const EmiCalculator = () => {
  const [emiValue, setEmiValue] = useState(0);
  const [loanType, setLoanType] = useState("");
  const [loanRate, setLoanRate] = useState(13.5);

  const calculateResults = ({ amount, interest, month }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(month);
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      // const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      // const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);

      // Set up results to the state to be displayed to the user
      setEmiValue(monthlyPaymentCalculated);
    }
    return;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const obj = {
      load_type: data.get("loan_type"),
      amount: parseFloat(data.get("loan_amount")),
      interest: parseFloat(data.get("rate")),
      month: parseFloat(data.get("duration")),
    };
    calculateResults(obj);
  };

  const handleLoanChange = (event) => {
    const type = event.target.value;
    setLoanType(type);
    const rate = loanRates.find((loan) => loan.name === type)?.rate;
    setLoanRate(rate);
  };

  return (
    <div id="#emi" className="row py-4" style={{ background: "rgba(0,0,0,0.1)" }}>
      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        <h2 className="display-4 mb-3 text-center">EMI Calculator</h2>
        <p className="lead text-center mb-10">
          {/* Reach out to us from our contact form and we will get back to you shortly. */}
        </p>
        <form className="contact-form" onSubmit={onFormSubmit}>
          <div className="messages"></div>
          <div className="controls">
            <div className="row gx-4">
              <div className="col-md-6">
                <div className="form-label-group mb-4">
                  <select
                    id="load_type"
                    type="text"
                    name="loan_type"
                    className="form-control"
                    placeholder="Label"
                    required="required"
                    onChange={(value) => handleLoanChange(value)}
                  >
                    {loanRates.map((loan) => {
                      return (
                        <option key={loan.id} value={loan.name}>
                          {loan.name}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="load_type">Loan Type *</label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-label-group mb-4">
                  <input
                    id="loan_amount"
                    type="number"
                    name="loan_amount"
                    className="form-control"
                    placeholder="10000"
                    required="required"
                  />
                  <label htmlFor="loan_amount">Loan Amount (NPR) *</label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-label-group mb-4">
                  <input
                    id="rate"
                    type="number"
                    name="rate"
                    className="form-control"
                    min={0}
                    step={0.01}
                    max={100}
                    presicion={2}
                    placeholder="10"
                    required="required"
                    value={loanRate}
                    onChange={(event) => setLoanRate(event.target.value)}
                  />
                  <label htmlFor="rate">Interest Rate *</label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-label-group mb-4">
                  <input
                    id="duration"
                    type="number"
                    name="duration"
                    className="form-control"
                    placeholder="Your Duration Month"
                    required="required"
                  />
                  <label htmlFor="duration">Duration (in month)*</label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-12 text-center">
                <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" value="Calculate" />
                <p className="">
                  <strong>Monthly Payment (EMI):</strong>
                  <span className="text-primary mx-2"> {emiValue && `Rs. ${emiValue}`}</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmiCalculator;
