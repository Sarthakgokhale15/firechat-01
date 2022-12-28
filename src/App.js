// import "./App.css";
// import Chat from "./components/Chat";
// import SignIn from "./components/SignIn";
// import { auth } from "./firebase.js";
// import { useAuthState } from "react-firebase-hooks/auth";
// // import kommunicate from "./chat2";
// function App() {
//   const [user] = useAuthState(auth);
//   return (
//     <>
//       {user ? <Chat /> : <SignIn />}
//       {/* <kommunicate /> */}
//     </>
//   );
// }

// export default App;
import "./App.css";
import Navbar from "../src/components/Navbar";
import Carousel from "../src/components/Carousal";
import Cards from "../src/components/Cards";
import SignIn2 from "../src/components/SignIn2";
import { auth } from "../src/components/firebase1";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {user ? (
        <div>
          <Navbar />
          <Carousel />
          <Cards />
        </div>
      ) : (
        <SignIn2 />
      )}
    </div>
  );
}

export default App;
