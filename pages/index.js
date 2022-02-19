import React, { } from "react";

import Banner from "../components/widgets/Banner";
import Products from "../components/widgets/Products";
import { useProduct } from "../contexts/ProductContext";

export default function Home() {
  const { items } = useProduct();

  return (
    <>
      <div className="lg:px-10 lg:py-2 p-4 text-teal-800">
        <Banner />
        <h2 className="capitalize font-bold text-3xl my-5">explore</h2>
        {items.length ? <Products items={items} /> : <h2 className="text-base text-center">Loading...</h2>}
        <div className="w-32"></div>
      </div>
    </>
  );
}
