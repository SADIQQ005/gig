import React from "react";

export default function create() {
  return (
    <div className="flex items-center justify-center text-teal-800">
      <div className="md:w-1/2 pt-3 px-6">
        <div className="mb-6 text-left font-bold text-4xl tracking-wider">
          Create <br /> Product <br /> page
        </div>

        <div>
          <label className="label">Name</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Product name"
            className="input"
          />
        </div>

        <div>
          <label className="label">Description</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Product description"
            className="input"
          />
        </div>

        <div className="flex justify-between">
          <div>
            <label className="label">Price</label>
            <input
              type="number"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Product price"
              className="input"
            />
          </div>

          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Product quantity"
              className="input"
            />
          </div>
        </div>

        <div>
          <label className="label">Specifications</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Product specification"
            className="input"
          />
        </div>

        <div>
          <label className="label">Description</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Product description"
            className="input"
          />
        </div>

        <button className="regBtn">add</button>
      </div>
    </div>
  );
}
