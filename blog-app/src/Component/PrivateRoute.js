// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const location = useLocation();

//   return isAuthenticated ? (
//     <Component {...rest} />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default PrivateRoute;
