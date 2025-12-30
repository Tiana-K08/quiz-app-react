import styles from './ProgressBar.module.scss';

export default function ProgressBar({
  steps,
  currentStepIndex,
  currentQuestionIndex,
}) {
  return (
    <div className={styles.progressBar}>
      {steps.map((step, index) => {
        const totalQuestions = step.fields.questions.length;
        let fullLine = 0;

        // steps befor
        if (index < currentStepIndex) {
          fullLine = 100;
        }

        // current step
        if (index === currentStepIndex) {
          fullLine = (currentQuestionIndex / totalQuestions) * 100;
        }

        // steps after
        if (index > currentStepIndex) {
          fullLine = 0;
        }

        return (
          <div key={step.fields.stepId} className={styles.stepBar}>
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
