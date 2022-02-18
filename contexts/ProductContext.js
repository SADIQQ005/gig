import React, { createContext, useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "./../firebase/Api";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [prog, setProg] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  function uploadImage(file) {
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProg(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrl(downloadURL);
        });
      }
    );
  }

  function addProduct(data) {
    const docRef = addDoc(collection(db, "products"), data);
    console.log("Document written with ID: ", docRef.id);
  }

  const value = { addProduct, uploadImage, prog, imageUrl };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
