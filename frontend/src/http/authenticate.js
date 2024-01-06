export const apiRegisterMethod = async (data) => {
  try {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData);
    }
    return responseData;
  } catch (error) {
    throw new Error("Erreur");
  }
};
export const apiLoginMethod = async (data) => {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData);
    }
    return responseData;
  } catch (error) {
    throw new Error("Erreur");
  }
};
