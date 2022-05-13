import { useState } from 'react';
import Question from './Question';
import questions from './questions';
import './App.css';

const validateForm = (form, setError) => {
  Object.keys(form).length < 3
    ? setError({
        type: 'danger',
        message: 'You must select at least one value for each question',
      })
    : setError({ type: 'success', message: 'Thank you!' });
};

const App = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    validateForm(form, setError);
    event.preventDefault();
  };

  const handleInput = (e) => {
    setError(false);
    const copyForm = { ...form };

    if (e.target.checked) {
      copyForm[e.target.name] = {
        ...copyForm[e.target.name],
        [e.target.value]: e.target.checked,
      };
    } else {
      delete copyForm[e.target.name][e.target.value];
    }
    setForm(copyForm);
  };

  return (
    <main className='App'>
      <h1 className='App-title'>Risk Assessment</h1>
      {error && <div className={`error-${error.type}`}>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            handle={handleInput}
          />
        ))}
        <div className='content-btn'>
          <button type='submit'>Next</button>
        </div>
      </form>
    </main>
  );
};

export default App;
