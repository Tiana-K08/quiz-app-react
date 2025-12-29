import styles from './ProgressBar.module.scss';

export default function ProgressBar() {
  // Статичні дані - замінити
  const steps = [
    { id: 1, questions: 4, answers: 1 },
    { id: 2, questions: 7, answers: 2 },
    { id: 3, questions: 5, answers: 3 },
    { id: 4, questions: 4, answers: 3 },
  ];

  return (
    <div className={styles.progressBarWrapper}>
      {steps.map((step) => {
        const fullLine = (step.answers / step.questions) * 100;

        return (
          <div key={step.id} className={styles.stepBar}>
            <div
              className={styles.stepFull}
              style={{ width: `${fullLine}%` }}
            />
          </div>
        );
      })}
    </div>
  );
}
