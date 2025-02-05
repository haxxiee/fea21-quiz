import React, { useEffect, useState } from "react";

// Den här komponenten har ett par stycken problem och
// saknar några delar. Mer exakt: 5 stycken.
// Det är din uppgift att identifiera och lösa dessa.
//
// Men komponentens syfte är att hämta en användare
// från dummyjson-apiet och skriva ut dennes namn.

const Four = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getData = async (url) => {
    let test;
    const response = await fetch(url)
      .then((data) => data.json())
      .then((data) => (test = data));
    return test;
  };

  async function getUser() {
    const user = await getData("https://dummyjson.com/users/1");
    setUser(user);
  }

  // Rör inte koden under denna kommentaren
  if (!user) {
    return <div data-testid="four-name">No user found</div>;
  }

  return <div data-testid="four-name">My name is: {user.firstName}</div>;
};

export default Four;
