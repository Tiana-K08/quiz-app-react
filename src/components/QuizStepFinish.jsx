export default function QuizStepFinish({ onNextStep }) {
  return (
    <>
      <h1>Вітаємо! &#127881;</h1>
      <p>Ти пройшов всі питання цього розділу.</p>
      <button onClick={onNextStep}>Далі</button>
    </>
  );
}
