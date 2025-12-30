import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { saveAnswer } from '../../store/quizSlice.js';

import styles from './QuizQuestion.module.scss';

export default function QuizQuestion({
  stepOrder,
  stepTitle,
  question,
  onNextQuestion,
}) {
  const [answer, setAnswer] = useState(
    question.answerType === 'multiple' ? [] : ''
  );
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  return (
    <div className={styles.question}>
      <h2>
        Крок {stepOrder}: {stepTitle}
      </h2>
      <p>{question.body}</p>

      {question.answerType === 'multiple' && (
        <div className={styles.checkbox}>
          {question.answerOptions.map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={option}
                checked={answer.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAnswer([...answer, option]);
                  } else {
                    setAnswer(answer.filter((item) => item !== option));
                  }
                }}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {question.answerType === 'text' && (
        <input
          type="text"
          className={styles.input}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}

      <button
        onClick={() => {
          let isCorrect = false;

          if (question.answerType === 'text') {
            const userText =
              typeof answer === 'string' ? answer.trim().toLowerCase() : '';
            const correctText =
              typeof question.correctAnswer === 'string'
                ? question.correctAnswer.trim().toLowerCase()
                : '';
            isCorrect = userText === correctText;
          }

          if (question.answerType === 'multiple') {
            const sortedUser = [...answer].sort();
            const sortedCorrect = [...question.correctAnswer].sort();

            isCorrect =
              sortedUser.length === sortedCorrect.length &&
              sortedUser.every((val, index) => val === sortedCorrect[index]);
          }

          dispatch(
            saveAnswer({
              questionId: question.questionId,
              userAnswer: answer,
              correctAnswer: question.correctAnswer,
              isCorrect,
            })
          );

          onNextQuestion();
        }}
        className={styles.button}
      >
        Наступне питання
      </button>
    </div>
  );
}
