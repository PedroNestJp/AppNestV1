import React from "react";
import { Link } from "react-router-dom";

function UserAccount() {
  return (
    <div>
      <div>Minha conta</div>
      <div>
      <p>
        {" "}
        Deseja alterar sua senha?{" "}
        <Link to="/resetPassword">
          {" "}
          <strong> Redefinir senha </strong>{" "}
        </Link>{" "}
      </p>
      </div>
    </div>
  );
}

export default UserAccount;
