import React from "react";
import Link from "next/link";

export default function Products({ items }) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {items &&
        items.map((item) => {
          return (
            <Link href="/id" key={item.Id}>
              <a>
                <div className="w-30 cursor-pointer">
                  <img
                    className="md:h-96 h-56 w-full"
                    src={item.imageUrl}
                    alt="product"
                  />
                  <div className="md:p-4 p-2">
                    <header className="capitalize tracking-wide text-2xl font-semibold">
                      {item.title}
                    </header>
                    <p className="font-light md:text-2xl text-xl">
                      NGN {item.price}
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
