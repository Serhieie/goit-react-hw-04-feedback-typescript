export function CalculatedStats({ percentageOfPositive, totalFeedback }) {
  return (
    <>
      <p
        className="  text-center text-3xl font-semibold text-darkFont m-0
        mt-5 md:text-2xl md:w-full md:max-w-[320px] md:font-bold md:mt-1"
      >
        Positive Feedbacks: {percentageOfPositive}
      </p>
      <p
        className="  text-center text-3xl font-semibold text-darkFont m-0
        mt-5 md:text-2xl md:w-full md:max-w-[320px] md:font-bold md:mt-1"
      >
        Total: {totalFeedback}
      </p>
    </>
  );
}
