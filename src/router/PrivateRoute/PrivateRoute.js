import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../constext/UserContext";

const PrivateRoute = ({children}) => {
  const location = useLocation();
    

const {user, loading} = useContext(AuthContext);

if(loading) {
  return <div className="d-flex justify-content-center align-items-center mt-5"> <Spinner animation="border" variant="primary" /></div>
}

if(user && user.uid) {
    return children;
}
  return <Navigate to="/user/login" state={{from: location}}></Navigate>
}
export default PrivateRoute;
