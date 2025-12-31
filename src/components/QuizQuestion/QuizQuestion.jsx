import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAnswer, clearAnswers } from '../../store/quizSlice.js';

import styles from './QuizQuestion.module.scss';

export default function QuizQuestion({
  stepOrder,
  stepTitle,
  question,
  onNextQuestion,
}) {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(
    question.answerType === 'multiple' ? [] : ''
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setAnswer(question.answerType === 'multiple' ? [] : '');
  }, [question]);

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

      <div className={styles.btnContainer}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(clearAnswers());
            navigate('/');
          }}
        >
          Вийти з вікторини
        </button>

        <button
          className={styles.button}
          onClick={() => {
            const isAnswerEmpty =
              question.answerType === 'text'
                ? answer.trim() === ''
                : answer.length === 0;

            if (isAnswerEmpty) {
              alert(
                'Будь ласка, введіть відповідь щоб перейти до наступного питання!'
              );
              return;
            }

            let isCorrect = false;

            if (question.answerType === 'text') {
              const userText =
                typeof answer === 'string' ? answer.trim().toLowerCase() : '';
              const correctText = Array.isArray(question.correctAnswer)
                ? question.correctAnswer[0].trim().toLowerCase()
                : question.correctAnswer.trim().toLowerCase();

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
        >
          Наступне питання
        </button>
      </div>
    </div>
  );
}
