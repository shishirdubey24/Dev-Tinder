import { useState,useRef,useEffect } from "react"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/FireBase";
import ValidationForm from "../utils/ValidationForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {

  const [isSignedIn, setSignedIn] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);

  // Toggle between Sign-up and Sign-in
  const handleSignup = () => {
    setSignedIn(!isSignedIn);
  };

  // Handle Sign-up or Sign-in button click
  const handleBtnClick = async () => {
    // Step 1: Validate user input
    const message = ValidationForm(email.current.value, password.current.value);
    setErrormsg(message);
    if (message) return;

    try {
      let userCredential;

      if (!isSignedIn) {
        // Sign-Up Logic
        userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
      } else {
        // Sign-In Logic
        userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
      }

      const user = userCredential.user;
      console.log("User Authenticated: ", user);

      // Step 2: Dispatch user to Redux store
      dispatch(addUser({ uid: user.uid, email: user.email }));

      // Step 3: Navigate to Browse page
      navigate("/Browse");

    } catch (error) {
      setErrormsg(error.message);
    }
  };

  // Firebase Auth Listener (Ensures user stays logged in)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(addUser({ uid: user.uid, email: user.email }));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

     
   
  return (
    <div>
       <form  onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl">{isSignedIn?"SIgnIn":"SignUp"}</h1>


        {!isSignedIn&& ( <input  type="Name" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>) }


        {!isSignedIn &&(<input type="Phone Number" placeholder="Number" className="p-2 my-2 w-full bg-gray-700"/>)}


          <input ref={email} type="text" placeholder="Email Address" className="p-2 my-2 w-full  bg-gray-700"  />
          <input ref={password} type="password" placeholder="Enter password" className="p-2 my-2 w-full bg-gray-700"/>

<p className="text-gray-800 font-bold text-lg py-2.5" > {errormsg }</p>     
 <button className="p-2 my-4 bg-gray-500 w-full rounded-lg " onClick={handleBtnClick}>{isSignedIn?"SignIn":"SingUp"}</button>
        
        <p className="py-4 " onClick={handleSignup}>{isSignedIn?"--> New here SIgnup Now <--":"-->Already regestered Lets SinIn Now <--"}</p> 
        </form>
    </div>
  )
}

export default Login
