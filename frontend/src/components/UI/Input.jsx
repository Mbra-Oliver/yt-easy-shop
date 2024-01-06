import React from "react";

export default function Input({ error, ...props }) {
  return (
    <>
      <input {...props} />
      {error && (
        <p className="control-error-text">La valeur saisie est invalide</p>
      )}
    </>
  );
}
