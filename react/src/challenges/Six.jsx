import React, { useState } from "react";

// Slutför följande komponent.
// Tanken är att den ska skriva ut för och efternamn som t.ex.
// "Hi, my name is: Oscar Nilsson" i p-taggen.
//
// Det saknas några delar för att den ska göra det.
// Identifiera de sakerna som saknas och fixa komponenten!

// Förstår inte riktigt vad man ska ändra och inte..?
// Har aldrig hanterat onChange med liknande
// Gjorde en egen på 5 sek nedan. v
function Six() {
  // Ändra inte statet nedan
  const [input, setInput] = useState({});

  function handleInput(e) {
    // Rör inte funktionen nedan
    setInput((input) => ({ ...input, [inputName]: value }));
  }

  return (
    <div>
      <p data-testid="six-text">
        Hi, my name is: {input} {input}
      </p>
      <input type="text" name="firstName" data-testid="six-firstName" />
      <input type="text" name="lastName" data-testid="six-lastName" />
    </div>
  );
}

// function Six() {
//   // Ändra inte statet nedan
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   return (
//     <div>
//       <p data-testid="six-text">
//         Hi, my name is: {firstName} {lastName}
//       </p>
//       <input
//         type="text"
//         name="firstName"
//         data-testid="six-firstName"
//         onChange={(e) => setFirstName(e.target.value)}
//         value={firstName}
//       />
//       <input
//         type="text"
//         name="lastName"
//         data-testid="six-lastName"
//         onChange={(e) => setLastName(e.target.value)}
//         value={lastName}
//       />
//     </div>
//   );
// }

export default Six;
