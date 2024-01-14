const Button = ({ children, ...props }) => {
  return (
    <button className={`${props.custom_class} defaultPrimaryBtn`}>
      {children}
    </button>
  );
};

export default Button;
