import { collection, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase";
import Login from "./Login";

function App() {

  // async function checkUserExists() {
  //   const ref = collection(db, "users");
  //   const q = query(ref, where("name", "==", "chinmay"));
  //   console.log(q)
  //   onSnapshot(q, (snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       console.log("Name:", doc.data())
  //     })
  //   })

    // const docSnap = await getDocs(ref);
    // if (docSnap.exists()) {
    //   const user = DocumentSnapshot.data();
    //   console.log(user.name);
    // } else {
    //   console.log("No such document!");
    // }

    // getDocs(ref)
    //   .then((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       console.log(doc.data())
    //     })
    //   })

    // const docSnap = await getDoc(ref);
    // if (docSnap.exists()) {
    //     const admin = docSnap.data();
    //     console.log(admin.name);
    // } else {
    //     console.log("No such document!");
    // }

  
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
