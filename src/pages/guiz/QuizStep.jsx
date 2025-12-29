import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../services/contentful.js';

import QuizQuestion from '../../components/QuizQuestion.jsx';
import NotFoundPage from '../NotFoundPage.jsx';

import styles from '../Page.module.scss';

export default function QuizPage() {
  const [steps, setSteps] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .getEntries({
        content_type: 'step',
        include: 1,
        order: 'fields.order',
      })
      .then((response) => {
        setSteps(response.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error?.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const currentStep = steps.find((step) => step.fields.stepId === slug);

  if (!currentStep) {
    return <NotFoundPage />;
  }

  const questions = currentStep.fields.questions;
  const currentQuestion = questions[currentQuestionIndex].fields;

  const handleToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Фінальний компонент кроку + "Перехід на наступний крок"
    }
  };

  // Тимчасово
  console.log(currentQuestion);

  return (
    <>
      <h1>
        Крок {currentStep.fields.order}: {currentStep.fields.title}
      </h1>
      <QuizQuestion question={currentQuestion} onNext={handleToNextQuestion} />
    </>
  );
}
