import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";

export default function create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [spec, setSpec] = useState("");

  const [error, setError] = useState("");

  const { addProduct, uploadImage, prog, imageUrl } = useProduct();

  const creds = { title, desc, price, qty, spec, imageUrl };

  function handleUpload(e) {
    const file = e.target.files[0];
    uploadImage(file);
  }

  async function createProduct(e) {
    e.preventDefault();
    if (title == "" || desc == "" || price == 0 || imageUrl == "") {
      return setError("Fill all empty fields");
    }
    try {
      await addProduct(creds);
      setTitle("");
      setDesc("");
      setPrice(0);
      setQty(0);
      setSpec("");
    } catch (err) {
      setError("something went wrong try again");
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-center text-teal-800">
      <div className="md:w-1/2 pt-3 px-6">
        <div className="mb-6 text-left font-bold text-4xl tracking-wider">
          Create <br /> Product <br /> page
        </div>
        <form>
          {error && (
            <h3 className="text-center bg-pink-300 text-pink-600 p-3 rounded-md my-4">
              {error}
            </h3>
          )}
          <div>
            <label className="label">Name</label>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Product name"
              className="input"
            />
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              value={desc}
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Product description"
              className="input"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="label">Price</label>
              <input
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product price"
                className="input"
              />
            </div>

            <div>
              <label className="label">Quantity</label>
              <input
                value={qty}
                type="number"
                onChange={(e) => setQty(e.target.value)}
                placeholder="Product quantity"
                className="input"
              />
            </div>
          </div>

          <div>
            <label className="label">Specifications</label>
            <textarea
              value={spec}
              type="text"
              onChange={(e) => setSpec(e.target.value)}
              placeholder="Product specification"
              className="input"
            />
          </div>

          <div>
            <label className="label">Thumbnail</label>
            <input
              type="file"
              onChange={handleUpload}
              placeholder="Product description"
              className="input"
            />
          </div>
          {prog && (
            <progress
              value={prog}
              className="bg-teal-200 shadow-md w-full rounded-md py-2"
            ></progress>
          )}
        </form>

        <button onClick={createProduct} className="regBtn">
          add
        </button>
      </div>
    </div>
  );
}
