const countTotalFeedback = (
  good: number,
  neutral: number,
  bad: number
): number => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = (
  values: number,
  goods: number
): number => {
  if (!goods) {
    return 0;
  }
  return Number(((goods / values) * 100).toFixed(2));
};

export { countTotalFeedback, countPositiveFeedbackPercentage };
