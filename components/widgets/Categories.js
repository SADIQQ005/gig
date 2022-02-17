import React from "react";
import Link from "next/link";

function Categories() {
  const cards = [
    {
      id: "2",
      title: "fisheries",
      thumbnail: "./images/product2.jpg",
    },
    {
      id: "3",
      title: "groceries",
      thumbnail: "./images/product3.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:gap-6 gap-2">
      {cards &&
        cards.map((card) => {
          return (
            <Link href="/id">
              <a key={card.id}>
                <div className="w-30 shadow-md cursor-pointer">
                  <header className="md:p-4 p-2 bg-teal-50 capitalize tracking-wide text-2xl font-bold">
                    {card.title}
                  </header>
                  <img
                    className="md:h-96 h-56 w-full"
                    src={card.thumbnail}
                    alt="product"
                  />
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}

export default Categories;
