// // "use client";
// // import { useState } from "react";
// // export default function Home() {
// //   const [step, setStep] = useState(1);

// //   const nextstep = () => setStep(step + 1);

// //   const prevstep = () => setStep(step - 1);

// //   return (
// //     <div>
// //       <h1>multi step form</h1>
// //       {step === 1 && (
// //         <div>
// //           <h2>step1</h2>
// //           <input type="text" placeholder="Enter Name " />
// //           <br></br>
// //           <button onClick={nextstep}>
// //             Next
// //           </button>
// //         </div>
// //       )}

// //       {step === 2 && (
// //         <div>
// //           <h2>step 2</h2>
// //           <input type="email" placeholder="Enter Email" />
// //           <br></br>
// //           <button onClick={prevstep}>
// //             Back
// //           </button>
// //           <button onClick={nextstep}>
// //             Next
// //           </button>
// //         </div>

// //       )}

// //       {step === 3 && (
// //         <div>
// //           <h2>Step 3</h2>
// //           <input type="password" placeholder="Enter password" />
// //           <br></br>
// //           <button onClick={prevstep}>
// //             Back
// //           </button>

// //           <button onClick={() => alert("Form submited!")}>
// //             Submit
// //           </button>
// //         </div>
// //       )}

// //     </div>
// //   );


// // }


















// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   return (
//     <div style={containerStyle}>
//       <div style={cardStyle}>
//         <h1 style={{ textAlign: "center" }}>Multi-Step Form</h1>

//         {step === 1 && (
//           <>
//             <input style={inputStyle} type="text" placeholder="Enter Name" />
//             <button style={buttonStyle} onClick={nextStep}>
//               Next
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <input style={inputStyle} type="email" placeholder="Enter Email" />
//             <div>
//               <button style={backButton} onClick={prevStep}>
//                 Back
//               </button>
//               <button style={buttonStyle} onClick={nextStep}>
//                 Next
//               </button>
//             </div>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <input
//               style={inputStyle}
//               type="password"
//               placeholder="Enter Password"
//             />
//             <div>
//               <button style={backButton} onClick={prevStep}>
//                 Back
//               </button>
//               <button
//                 style={buttonStyle}
//                 onClick={() => alert("Form Submitted!")}
//               >
//                 Submit
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// /* Styles */
// const containerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   background: "#f5f7fa",
// };

// const cardStyle = {
//   width: "350px",
//   padding: "30px",
//   background: "white",
//   borderRadius: "10px",
//   boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   margin: "10px 0",
//   borderRadius: "5px",
//   border: "1px solid #ddd",
// };

// const buttonStyle = {
//   padding: "10px 15px",
//   margin: "5px",
//   borderRadius: "5px",
//   border: "none",
//   background: "#4f46e5",
//   color: "white",
//   cursor: "pointer",
// };

// const backButton = {
//   ...buttonStyle,
//   background: "#999",
// };




































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
    alert("Form Submitted Successfully ✅");
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* Progress Bar */}
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
          {/* Same Form Every Step */}
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

















