import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../services/contentful.js';

import NotFoundPage from '../NotFoundPage.jsx';

import styles from '../Page.module.scss';

export default function QuizPage() {
  const [steps, setSteps] = useState([]);
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
    return (
      <div className={styles.content}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.content}>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  const currentStep = steps.find((step) => step.fields.stepId === slug);

  if (!currentStep) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>
        Крок {currentStep.fields.order}: {currentStep.fields.title}
      </h1>
    </div>
  );
}
