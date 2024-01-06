import { toast } from "react-toastify";

export const notificationErrorAlert = (title, value) => {
  toast.error(`${title}: ${value}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined, // Laissez-le non défini pour utiliser la valeur par défaut
    theme: "light",
  });
};
