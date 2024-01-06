import { redirect } from "react-router-dom";

export function logoutAction() {
  localStorage.removeItem("easy_shop_user_token");

  return redirect("/login");
}
