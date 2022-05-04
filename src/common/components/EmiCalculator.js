import React from "react";

const EmiCalculator = () => {
  return (
    <div id="#emi" className="row py-4" style={{ background: "rgba(0,0,0,0.1)" }}>
      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        <h2 className="display-4 mb-3 text-center">EMI Calculator</h2>
        <p className="lead text-center mb-10">
          {/* Reach out to us from our contact form and we will get back to you shortly. */}
        </p>
        <form className="contact-form">
          <div className="messages"></div>
          <div className="controls">
            <div className="row gx-4">
              <div className="col-md-6">
                <div className="form-label-group mb-4">
                  <input
                    id="load_type"
                    type="text"
                    name="loan_type"
                    className="form-control"
                    placeholder="Label"
                    required="required"
                    dataError="Loan Type is required."
                  />
                  <label for="load_type">Loan Type *</label>
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
                    dataError="Loan Amount is required."
                  />
                  <label for="loan_amount">Loan Amount (NPR) *</label>
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
                    placeholder="10"
                    required="required"
                    dataError="Interest Rate is required."
                  />
                  <label for="rate">Interest Rate *</label>
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
                    dataError="Duration is required."
                  />
                  <label for="duration">Duration (in month)</label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-12 text-center">
                <input
                  type="submit"
                  className="btn btn-primary rounded-pill btn-send mb-3"
                  value="Calculate"
                />
                <p className="text-muted">
                  <strong>*</strong> These fields are required.
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
