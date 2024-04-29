import { type } from "@testing-library/user-event/dist/type";
import { ADD_SHOP, DELETE_SHOP, EDIT_SHOP, GET_SHOP } from "../Actiontype";
import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
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
  } catch (error) {
    console.error("Error adding shop:", error);
  }
};

export const addShop = (data) => async (dispatch) => {
  try {
    console.log(data.image.name);
    const rNo = Math.floor(Math.random() * 1000);

    const fileRef = ref(storage, "image/" + rNo + "_" + data.image.name);

    console.log(fileRef);

    let idata = { ...data };

    console.log(idata);

    await uploadBytes(fileRef, data.image).then(async (snapshot) => {
      console.log("aploade image ");
      await getDownloadURL(snapshot.ref).then(async (url) => {
        console.log(url);

        idata = { ...data, image: url, "image_url": rNo + "_" + data.image.name };

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
    // dispatch({type: ADD_SHOP , payload: {...idata}})
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

    const desertRef = ref(storage, "image/" + data.image);
    // console.log(data);
    await deleteObject(desertRef).then(async () => {
      await deleteDoc(doc(db, "shops", data.id));
      console.log("deleted success");
    });

    // .delete("http://localhost:3001/fruites", id)
    // .then((response) => {
    //   console.log(response);
    //   dispatch({ type: DELETE_SHOP, payload: response.id });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  } catch (error) {
    console.log(error);
  }
};

// export const editShop = (data) => async (dispatch) => {
//   console.log(data);
//   try {
//     await axios
//       .put("http://localhost:3001/fruites" + data.id)
//       .then((response) => {
//         dispatch({ type: EDIT_SHOP, payload: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.error("Error adding shop:", error);
//   }
// };
