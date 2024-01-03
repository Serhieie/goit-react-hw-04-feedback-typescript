import PropTypes from 'prop-types';

export function Controls({ marksKeys, onLeaveFeedback }) {
  return (
    <ul
      className="  mx-auto; mt-28 flex justify-center gap-5 w-full max-w-[700px]
  list-none  rounded-lg pl-0 box-border md:mt-5"
    >
      {marksKeys.map(key => (
        <li
          className="flex justify-center text-3xl font-semibold rounded-lg bg-brown
  box-border w-full max-w-[190px] cursor-pointer transition-all duration-300 shadow-lg
   shadow-shadowBox text-white py-3 px-8 hover:bg-darkFont md:text-lg  md:py-14
   md:px-0 largeScreen:py-5 largeScreen:px-16"
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </li>
      ))}
    </ul>
  );
}

Controls.propTypes = {
  marksKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
