const countTotalFeedback = (good, neutral, bad) => {
  return good + neutral + bad;
};
const countPositiveFeedbackPercentage = (values, goods) => {
  if (!goods) {
    return '0%';
  }
  return ((goods / values) * 100).toFixed(2) + '%';
};

export { countTotalFeedback, countPositiveFeedbackPercentage };
