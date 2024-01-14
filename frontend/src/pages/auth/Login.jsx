import React from "react";
import classes from "./auth.module.css";
import Input from "./../../components/UI/Input";
import Button from "./../../components/UI/Button";

export default function Login() {
  return (
    <div className={classes.centerContent}>
      <div className={classes.authBox}>
        <h4 className={classes.formTitle}>
          Connexion a votre compte utilisateur
        </h4>

        <div className={classes.formGroup}>
          <label>Email</label>
          <Input
            type="email"
            placeholder="Entrer votre email"
            className="inputDefault p-0"
          />
        </div>

        <div className={classes.formGroup}>
          <label>Mot de passe</label>
          <Input
            type="password"
            placeholder="******"
            className="inputDefault p-0"
          />
        </div>

        <Button custom_class="w-100 cursor-pointer p-0">Me connecter</Button>
      </div>
    </div>
  );
}
// https://github.com/Mbra-Oliver/yt-easy-shop/blob/main/frontend/src/pages/auth/auth.module.css
