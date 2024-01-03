import PropTypes from 'prop-types';
export function Notification({ message }) {
  return (
    <p className="  text-center text-5xl font-bold text-darkFont mt-36 md:text-4xl">
      {message}
    </p>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
