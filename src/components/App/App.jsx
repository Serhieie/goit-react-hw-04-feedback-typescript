import React, { useState } from 'react';
import { Controls } from '../Controls/Controls';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../helpers/helpers';

export const App = () => {
  //як Краще?
  // const [marks, setMarks] = useState({ good: 0, neutral: 0, bad: 0 });
  // const addMark = key => {
  //   setMarks(prevState => ({
  //     ...prevState,
  //     [key]: prevState[key] + 1,
  //   }));
  // };
  // const { good, neutral, bad } = marks;

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //створюємо обєкт для зручності
  const marks = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  //виявляємо ключі та значення обєкту для зручності відмальовування
  const marksValues = Object.values(marks);
  const marksKeys = Object.keys(marks);

  //по ключу опрокинутому з Управління виявляємо куда додати 1
  const addMark = key => {
    switch (key) {
      case 'good':
        return setGood(state => state + 1);
      case 'neutral':
        return setNeutral(state => state + 1);
      case 'bad':
        return setBad(state => state + 1);
      default:
        throw new Error('Unexpected error');
    }
  };

  const totalFeedback = countTotalFeedback(good, neutral, bad);
  const percentageOfPositive = countPositiveFeedbackPercentage(
    totalFeedback,
    marks.good
  );

  return (
    <div
      className={`flex flex-col items-center mx-auto mt-20 w-[60%] py-7 px-5 rounded-lg
 shadow-2xl shadow-orange-900  select-none min-h-[562px] relative before:content-[''] before:absolute
 before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-lightyellow
  before:to-burlywood before:bg-cover before:bg-center before:bg-fixed before:rounded-lg before:opacity-80
 before:-z-10 md:mt-10 md:py-2 md:px-1.5 md:w-[90%] md:h-[90vh] md:gap-7`}
    >
      <Section title={'Please leave feedback'}>
        {<Controls marksKeys={marksKeys} onLeaveFeedback={addMark} />}
      </Section>
      {totalFeedback === 0 ? (
        <Notification message="Here is no feedbacks" />
      ) : (
        <Section title={'Statistics'}>
          {
            <Statistics
              marksKeys={marksKeys}
              marksValues={marksValues}
              percentageOfPositive={percentageOfPositive}
              totalFeedback={totalFeedback}
            />
          }
        </Section>
      )}
    </div>
  );
};
