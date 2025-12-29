import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import client from '../../services/contentful.js';

import QuizQuestion from '../../components/QuizQuestion.jsx';
import QuizStepFinish from '../../components/QuizStepFinish.jsx';
import NotFoundPage from '../NotFoundPage.jsx';

export default function QuizPage() {
  const [steps, setSteps] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [slug]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const currentStep = steps.find((step) => step.fields.stepId === slug);
  if (!currentStep) return <NotFoundPage />;

  const questions = currentStep.fields.questions;
  const isFinish = currentQuestionIndex >= questions.length;

  const handleToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentStepIndex = steps.indexOf(currentStep);
  const nextStep =
    currentStepIndex !== -1 && currentStepIndex < steps.length - 1
      ? steps[currentStepIndex + 1].fields.stepId
      : null;

  const handleToNextStep = () => {
    if (nextStep) {
      navigate(`/quiz/${nextStep}`);
    } else {
      navigate('/results');
    }
  };

  return (
    <>
      {isFinish ? (
        <QuizStepFinish onNextStep={handleToNextStep} />
      ) : (
        <QuizQuestion
          stepOrder={currentStep.fields.order}
          stepTitle={currentStep.fields.title}
          question={questions[currentQuestionIndex].fields}
          onNextQuestion={handleToNextQuestion}
        />
      )}
    </>
  );
}
