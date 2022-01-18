import React from "react";
import Link from 'next/link'

export default function Cards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link href='/id'>
        <a>
          <div className="mt-4 shadow-md cursor-pointer">
            <img src="./images/product.jpg" alt="product" />
            <div className="p-4">
              <header className="tracking-wide text-2xl lowercase font-semibold">
                oil
              </header>
              <p className="font-light">some product description</p>
            </div>
            <footer className="tracking-wide bg-teal-100 text-right py-2 px-4 text-xs font-medium">
              Added 15min ago
            </footer>
          </div>
        </a>
      </Link>
    </div>
  );
}
