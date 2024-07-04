import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// Define the shape of your state
interface RootState {
  user: {
    currentUser: unknown; // Replace `any` with the actual type of `currentUser`
  };
}

const PrivateRoute = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to={"/loginPage"} />;
};

export default PrivateRoute;
