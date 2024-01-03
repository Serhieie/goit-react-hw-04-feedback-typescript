import PropTypes from 'prop-types';
import { CalculatedStats } from '../CalculatedStats/CalculatedStats';

export function Statistics({
  marksKeys,
  marksValues,
  percentageOfPositive,
  totalFeedback,
}) {
  return (
    <div
      className="mx-auto mt-5 flex flex-col justify-center
items-center gap-5 max-w-3xl rounded-lg pl-0 md:mt-4"
    >
      <ul
        className="flex justify-center gap-6 list-none
  rounded-lg pl-0 md:gap-2"
      >
        {marksValues.map((value, i) => {
          return (
            <li
              key={i}
              className="text-1xl flex items-center py-1 px-4 box-border bg-burlywood
              rounded-lg text-darkFont shadow-lg shadow-shadowBox md:flex-col md:text-2xl 
              md:font-semibold md:p-2 md:gap-4 largeScreen:text-4xl largeScreen:gap-2  largeScreen:font-semibold"
            >
              {marksKeys[i]}:
              <span
                className={`font-3xl font-bold text-darkFont 
              opacity-60 md:p-0 md:text-5xl largeScreen:font-4xl`}
              >
                {value}
              </span>
            </li>
          );
        })}
      </ul>
      <CalculatedStats
        percentageOfPositive={percentageOfPositive}
        totalFeedback={totalFeedback}
      />
    </div>
  );
}

Statistics.propTypes = {
  marksKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  marksValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  percentageOfPositive: PropTypes.string.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
