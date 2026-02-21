
"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="progress">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`step ${step >= item ? "active" : ""}`}
            >
              <div className="circle">{item}</div>
              <p>
                {item === 1 && "Contact Info"}
                {item === 2 && "Personal Info"}
                {item === 3 && "Finish"}
              </p>
            </div>
          ))}
        </div>

        <h2>Personal Information - Step {step}</h2>

        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Fullname" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="date" required />

          <div className="buttons">
            {step > 1 && (
              <button
                type="button"
                className="cancel"
                onClick={prevStep}
              >
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                className="next"
                onClick={nextStep}
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button type="submit" className="next">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

















