export default function QuizQuestion({ question, onNext }) {
  return (
    <div>
      <p>{question.body}</p>
      <p>Тут мають бути варіанти відповіді</p>
      {/* Поле для текстової відповіді */}
      <button onClick={onNext}>Наступне питання</button>
    </div>
  );
}
