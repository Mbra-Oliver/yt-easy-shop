import { useState } from "react";

export async function usePost(postFunctio) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [result, setResult] = useState();

  setIsLoading(true);

  try {
    const response = await postFunctio();
    const datas = await response.json();
    setResult(datas);
  } catch (err) {
    setError(err.message || "Erreur");
  }

  return {
    isLoading,
    error,
    result,
  };
}
