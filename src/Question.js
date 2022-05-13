import Choice from './Choice';

const Question = ({ question, handle }) => (
  <div>
    <p>{question.text}</p>
    <div className='choices'>
      {question.choices.map((choice, i) => {
        return (
          <Choice
            name={question.id}
            value={choice.name}
            label={choice.label}
            key={choice.name}
            handle={handle}
          />
        );
      })}
    </div>
  </div>
);

export default Question;
