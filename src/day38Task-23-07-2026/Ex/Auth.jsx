import React from "react";

function Auth(Admin) {
  return function AuthorizationComponent(props) {
    let role = "Admin"; 

    if (role !== "Admin") {
      return <h2>Access Denied</h2>;
    }

    return <Admin {...props} />;
  };
}

export default Auth;