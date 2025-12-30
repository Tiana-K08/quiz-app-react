import { useSelector } from 'react-redux';

import styles from './Page.module.scss';

export default function ResultsPage() {
  const answers = useSelector((state) => state.quiz.answers);
  console.log('All quiz answers:', answers);

  const totalQuestions = answers.length;
  const correctAnswersCount = answers.filter((a) => a.isCorrect).length;
  const correctPercentage =
    totalQuestions > 0
      ? Math.round((correctAnswersCount / totalQuestions) * 100)
      : 0;
  console.log('Total questions:', totalQuestions);
  console.log('Correct answers:', correctAnswersCount);
  console.log('Percentage correct:', correctPercentage);

  // return (
  //   <div className={styles.content}>
  //     <h1>Results ...</h1>
  //   </div>
  // );

  return (
    <div>
      <h2>Результати вікторини</h2>
      <p>
        Ви відповіли правильно на {correctAnswersCount} з {totalQuestions}{' '}
        питань.
      </p>
      <p>Відсоток правильних відповідей: {correctPercentage}%</p>
    </div>
  );
}
