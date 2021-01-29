import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({
  onSubmit, question, questionIndex, totalQuestions,
}) {
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

        <form onSubmit={onSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  key={alternativeId}
                  id={alternativeId}
                  type="radio"
                  name="question"
                  value={index}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>

      </Widget.Content>

    </Widget>
  );
}
