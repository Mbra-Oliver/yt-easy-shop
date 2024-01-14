const Input = ({ error, ...props }) => {
  return (
    <>
      <input {...props} />
      {error && (
        <p className="control-error-text">La valeur saisie est incorrecte.</p>
      )}
    </>
  );
};
export default Input;
