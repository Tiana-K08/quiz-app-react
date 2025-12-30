import styles from './QuizStepFinish.module.scss';

export default function QuizStepFinish({ onNextStep }) {
  return (
    <div className={styles.stepFinish}>
      <h1>Вітаємо! &#127881;</h1>
      <p>Ти пройшов всі питання цього розділу.</p>
      <button onClick={onNextStep} className={styles.button}>
        Далі
      </button>
    </div>
  );
}
