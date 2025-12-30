import styles from './QuizQuestion.module.scss';

export default function QuizQuestion({
  stepOrder,
  stepTitle,
  question,
  onNextQuestion,
}) {
  return (
    <div className={styles.question}>
      <h1>
        Крок {stepOrder}: {stepTitle}
      </h1>
      <p>{question.body}</p>
      <p>Тут мають бути варіанти відповіді</p>
      {/* Поле для текстової відповіді */}
      <button onClick={onNextQuestion} className={styles.button}>
        Наступне питання
      </button>
    </div>
  );
}
