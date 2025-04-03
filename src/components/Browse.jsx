import { useSelector } from "react-redux"
//import Store from "../utils/Store";
const Browse = () => {
  
   const user =useSelector((state) => state.user);
   console.log("the Browser data is ",user);
  return (
    <div>
    <h1>This is Browse Field</h1>
    {user ? (
      <p>Welcome, {user.email}!</p>
    ) : (
      <p>No user found. Please log in.</p>
    )}
  </div>
  )
}

export default Browse
