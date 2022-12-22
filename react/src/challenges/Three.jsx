import React from "react";

const Item = ({ text }) => {
  // Don't touch this
  if (typeof text === "string") {
    return <p data-testid="three-faulty-item">Inte ett nummer</p>;
  }

  // Men detta går bra
  const number = text;
  return <p data-testid="three-item">{number}</p>;
};

// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = ({ items }) => {
  const numericItems = items;
  console.log(items);
  return (
    <div>
      {numericItems.map((item) =>
        typeof item === "number" ? <Item text={item} /> : null
      )}
    </div>
  );
};

export default Three;
