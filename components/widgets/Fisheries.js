import React from "react";
import Link from "next/link";

export default function Fisheries() {
  const cards = [
    {
      id: "1",
      title: "burger",
      price: "1000",
      thumbnail: "./images/product.jpg",
    },
    {
      id: "2",
      title: "pasta",
      price: "1000",
      thumbnail: "./images/product2.jpg",
    },
    {
      id: "3",
      title: "salad",
      price: "1000",
      thumbnail: "./images/product3.jpg",
    },
    {
      id: "4",
      title: "pasta",
      price: "1000",
      thumbnail: "./images/product2.jpg",
    },
    {
      id: "5",
      title: "salad",
      price: "1000",
      thumbnail: "./images/product3.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {cards &&
        cards.map((card) => {
          return (
            <Link href="/id" key={card.id}>
              <a>
                <div className="w-30 cursor-pointer">
                  <img
                    className="md:h-96 h-56 w-full"
                    src={card.thumbnail}
                    alt="product"
                  />
                  <div className="md:p-4 p-2">
                    <header className="capitalize tracking-wide text-2xl font-semibold">
                      {card.title}
                    </header>
                    <p className="font-light md:text-2xl text-xl">
                      NGN {card.price}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
