const Input = ({ isEdited, error, ...props }) => {
  return (
    <>
      <input {...props} />
      {error && isEdited && (
        <p className="control-error-text">La valeur saisie est incorrecte.</p>
      )}
    </>
  );
};
export default Input;
