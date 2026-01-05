import { useSelector } from 'react-redux';

import styles from './Page.module.scss';

export default function ResultsPage() {
  const answers = useSelector((state) => state.quiz.answers);
  const totalQuestions = answers.length;
  const correctAnswersCount = answers.filter((a) => a.isCorrect).length;
  const correctPercentage =
    totalQuestions > 0
      ? Math.round((correctAnswersCount / totalQuestions) * 100)
      : 0;

  console.log('All quiz answers:', answers);

  return (
    <div className={styles.content}>
      <h1>Результати вікторини</h1>
      <p>
        Ви відповіли правильно на {correctAnswersCount} з {totalQuestions}{' '}
        питань.
      </p>
      <p>Відсоток правильних відповідей: {correctPercentage}%</p>
    </div>
  );
}
