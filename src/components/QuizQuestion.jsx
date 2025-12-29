export default function QuizQuestion({
  stepOrder,
  stepTitle,
  question,
  onNextQuestion,
}) {
  return (
    <>
      <h1>
        Крок {stepOrder}: {stepTitle}
      </h1>
      <p>{question.body}</p>
      <p>Тут мають бути варіанти відповіді</p>
      {/* Поле для текстової відповіді */}
      <button onClick={onNextQuestion}>Наступне питання</button>
    </>
  );
}
