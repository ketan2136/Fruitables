import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_SHOP,
  DELETE_SHOP,
  EDIT_SHOP,
  GET_SHOP,
  LOADING_START,
  LOADING_STOP,
} from "../Actiontype";
import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const getShop = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const querySnapshot = await getDocs(collection(db, "shops"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data.url);
    dispatch({ type: GET_SHOP, payload: data });

    // await axios
    // .get("http://localhost:3001/fruites")
    // .then((response) => {
    //   dispatch({ type: GET_SHOP, payload: response.data });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    console.error("Error adding shop:", error);
    dispatch({ type: LOADING_STOP });
  }
};

export const addShop = (data) => async (dispatch) => {
  try {
    const rNo = Math.floor(Math.random() * 1000);

    const fileRef = ref(storage, "image/" + rNo + "_" + data.image.name);
    let idata = { ...data };

    await uploadBytes(fileRef, data.image).then(async (snapshot) => {
      console.log("aploade image ");
      await getDownloadURL(snapshot.ref).then(async (url) => {
        console.log(url);

        idata = {
          ...data,
          image: url,
          image_name: rNo + "_" + data.image.name,
        };

        const docref = await addDoc(collection(db, "shops"), idata);
        idata = { ...idata, id: docref.id };

        // return {
        //   id: docref.id,
        //   image: url,
        //   ...data,
        //   "filre_name": rNo + "_" + data.image.name,
        // };
      });
    });
    console.log(idata);
    dispatch({ type: ADD_SHOP, payload: { ...idata } });
    return idata;
    // const docRef = await addDoc(collection(db, 'shops'), data);
    // dispatch({ type: ADD_SHOP, payload: { id: docRef.id, ...data , image: data.image.name} });

    // await axios
    //   .post("http://localhost:3001/fruites", data)
    //   .then((response) => {
    //     dispatch({ type: ADD_SHOP, payload: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  } catch (error) {
    console.error("Error adding shop:", error);
  }
};

export const deleteShop = (data) => async (dispatch) => {
  console.log(data);
  try {
    console.log(data.image);
    console.log("Deleting shop:", data);

    const desertRef = ref(storage, "image/" + data.image_name);

    await deleteObject(desertRef);
    console.log("Image deleted successfully");

    await deleteDoc(doc(db, "shops", data.id));
    console.log("Document deleted successfully");

    dispatch({ type: DELETE_SHOP, payload: data.id });
    console.log("Deleted shop from Redux store");
  } catch (error) {
    console.log(error);
  }
};

export const editShop = (data) => async (dispatch) => {
  console.log(data.id);
  try {
    if (typeof data.image === "string") {
      console.log("add img");
      const updataRef = doc(db, "shops", data.id);
      await updateDoc(updataRef, data);
      console.log(data);
      dispatch({ type: EDIT_SHOP, payload: data });
      // return data;
    } else {
      const fileRef = ref(storage, "image/" + data.image.name);
      let idata = { ...data };
       await deleteObject(fileRef).then(async () => {
        const rNo = Math.floor(Math.random() * 1000);
        const fileRef = ref(storage, "image/" + rNo + "_" + data.image.name);
        await uploadBytes(fileRef, data.image).then(async (snapshot) => {
          console.log("Uploaded a blob or file!");
          await getDownloadURL(snapshot.ref).then(async (url) => {
            console.log(url);

            idata = {
              ...data,
              image: url,
              image_name: rNo + "_" + data.image.name,
            };
          });
        });
        console.log('New Upload File Uploaded');
      });
     
      // console.log(idata);
      // dispatch({ type: EDIT_SHOP, payload: {...idata} });
      return idata;
    }

   
    // await axios
    //   .put("http://localhost:3001/fruites" + data.id)
    //   .then((response) => {
    //     dispatch({ type: EDIT_SHOP, payload: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  } catch (error) {
    console.error("Error adding shop:", error);
  }
};
