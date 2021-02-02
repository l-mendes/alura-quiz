import { useState } from 'react';
import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';

export default function QuestionWidget({
  onSubmit, question, questionIndex, totalQuestions, answer, onSelectAlternative,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState();
  const isCorrect = selectedAlternative === answer;
  const [isQuestionSubmited, setIsQuestionSubmited] = useState();

  const handleAlternativeChange = (alternative) => {
    setSelectedAlternative(alternative);
    onSelectAlternative(alternative);
  };

  return (
    <Widget key={questionIndex + 1}>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}` }</h3>
      </Widget.Header>

      <img
        alt={question.description}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={(e) => {
          e.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            setIsQuestionSubmited(false);
            onSubmit();
            setSelectedAlternative(undefined);
          }, 2000);
        }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const selectedAlternativeStatus = isQuestionSubmited && isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={selectedAlternativeStatus}
              >
                <input
                  key={alternativeId}
                  id={alternativeId}
                  type="radio"
                  name="question"
                  value={index}
                  onChange={() => handleAlternativeChange(index)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={selectedAlternative === undefined}>Confirmar</Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>

      </Widget.Content>

    </Widget>
  );
}
