import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db, storage } from "./../firebase/Api";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [prog, setProg] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [items, setItems] = useState([]);

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
    addDoc(collection(db, "products"), data);
    console.log("Document written");
  }

  useEffect(() => {
    const getProducts = [];
    const q = query(collection(db, "products"));
    const unSub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        getProducts.push({
          ...doc.data(),
          Id: doc.id,
        });
      });
      setItems(getProducts);
      console.log(items);
    });
    return () => unSub();
  }, []);

  const value = { addProduct, uploadImage, prog, imageUrl, items };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
