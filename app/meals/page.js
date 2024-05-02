import Link from "next/link";
import React from "react";

const Meals = () => {
  return (
    <main>
      <h1>Meals page</h1>
      <Link href="/meals/something">Something</Link>
    </main>
  );
};

export default Meals;
