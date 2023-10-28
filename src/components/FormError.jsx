import PropTypes from "prop-types";
const FormError = ({ message }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      <p>{message}</p>
    </div>
  );
};

FormError.propTypes = {
  message: PropTypes.string,
};

export default FormError;
