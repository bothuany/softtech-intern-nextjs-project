import React, { useState } from "react";

export default function Navbar({ data }) {
  const colorDefault = "#919eab";
  const colorSelected = "#084BBB";

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Categories",
    },
    {
      id: 2,
      name: "Cart",
      url: "/cart",
      selected: false,
    },
  ]);
  return <></>;
}
export async function getServerSideProps() {
  const response = await fetch(dir.api + "products/categories/");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
