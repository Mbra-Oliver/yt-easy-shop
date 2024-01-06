import { redirect } from "react-router-dom";

export function getToken() {
  const token = localStorage.getItem("easy_shop_user_token");

  if (!token) {
    return null;
  }

  return token;
}

export function tokenLoader() {
  return getToken();
}

export function checkUserAuthLoader() {
  const token = getToken();
  if (token) {
    return redirect("/");
  }

  return null;
}
