import React from "react";

const Item = ({ rock }) => {
  return <p data-testid="two-item">{rock}</p>;
};

// Slutför Two så att den skriver ut
// alla items som ges via props till Two.
// Använd komponenten Item för att skriva ut det
// i items.map nedan.

const Two = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item rock={item} />
      ))}
    </div>
  );
};

export default Two;
