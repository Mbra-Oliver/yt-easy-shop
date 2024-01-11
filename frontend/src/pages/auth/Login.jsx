import React, { useState } from "react";
import classes from "./auth.module.css";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { apiLoginMethod, apiRegisterMethod } from "./../../http/authenticate";
import { useInput } from "../../hooks/useInput";
import {
  emailIsValid,
  isNotEmpty,
  isPasswordValid,
} from "../../assets/validations/validator";
import { notificationErrorAlert } from "../../helpers/alert";
import { toast } from "react-toastify";
import { redirect, useNavigate } from "react-router-dom";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultError, setResultError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isNotEmpty(value) && emailIsValid(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => isPasswordValid(value));

  const handleLogin = async () => {
    setIsLoading(true);

    if (!emailIsValid(emailValue) || !isPasswordValid(passwordValue)) {
      setIsLoading(false);
      notificationErrorAlert("Erreur", "Veuillez remplir le formulaire");
      return;
    }

    const dataSend = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const result = await toast.promise(apiLoginMethod(dataSend), {
        pending: "Connexion en cours...",
      });

      if (result.statusCode === 200) {
        toast.success("Connexion au compte éffectuée");
        setIsLoading(false);
        setResultError(false);
        localStorage.setItem("easy_shop_user_token", result.token);
        redirect("/");
      } else {
        toast.error(result.message);
        setIsLoading(false);
        setResultError(true);
        setErrorText(result.message);
      }
    } catch (error) {
      toast.error(toast.error);
      setIsLoading(false);
      setResultError(true);
      setErrorText(result.message);
    }
  };

  return (
    <div className={classes.centerContent}>
      <div className={classes.authBox}>
        <h4 className={classes.formTitle}>
          Connexion a votre compte utilisateur
        </h4>

        {resultError && <p className="control-error-text">{errorText}</p>}

        <div className={classes.formGroup}>
          <label>Email</label>
          <Input
            type="email"
            onBlur={handleEmailBlur}
            value={emailValue}
            onChange={handleEmailChange}
            error={emailHasError}
            className="inputDefault p-0"
            placeholder="Entrer votre mail..."
          />
        </div>
        <div className={classes.formGroup}>
          <label>Password</label>
          <Input
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            error={passwordHasError}
            onBlur={handlePasswordBlur}
            className="inputDefault p-0"
            placeholder="****"
          />
        </div>

        <Button
          custom_class="w-100 cursor-pointer p-0"
          title={!isLoading ? "Connexion" : "Chargement..."}
          onClick={handleLogin}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
