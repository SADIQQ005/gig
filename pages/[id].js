import React from "react";

export default function detail() {
    return (
      <>
        <div className="md:mx-56 px-5 mt-8 text-teal-800">
          <div className="mb-8 text-left font-bold text-4xl tracking-wider">
            Detail <br/> page
          </div>
          <div className="md:flex">
            <img
              src="./images/product.jpg"
              alt="product img"
              className="md:w-1/2"
            />
            <div className="md:ml-16">
              <h2 className="text-5xl font-bold my-6">oil</h2>
              <span className="text-3xl font-thin">NGN 1000</span>
              <p className="font-light mt-6">some description of the product</p>
              <div className="border-4 border-teal-800 md:mt-20 my-10 text-center py-2 uppercase font-bold hover:bg-teal-800 hover:text-white cursor-pointer">
                order
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
