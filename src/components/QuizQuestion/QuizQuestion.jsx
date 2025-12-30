import styles from './QuizQuestion.module.scss';

export default function QuizQuestion({
  stepOrder,
  stepTitle,
  question,
  onNextQuestion,
}) {
  return (
    <div className={styles.question}>
      <h2>
        Крок {stepOrder}: {stepTitle}
      </h2>
      <p>{question.body}</p>

      {question.answerType === 'text' && (
        <input type="text" className={styles.input} />
      )}

      {question.answerType === 'multiple' && (
        <div className={styles.checkbox}>
          {question.answerOptions.map((option, index) => (
            <label key={index}>
              <input type="checkbox" value={option} />
              {option}
            </label>
          ))}
        </div>
      )}

      <button onClick={onNextQuestion} className={styles.button}>
        Наступне питання
      </button>
    </div>
  );
}
