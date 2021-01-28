import Widget from '../Widget';
import Button from '../Button';
import db from '../../utils/db.json';

export default function QuestionWidget({ question, index }) {
  return (
    <Widget key={index + 1}>
      <Widget.Header>
        <h3>{`Pergunta ${index + 1} de ${db.questions.length}` }</h3>
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

        <Button type="submit">Confirmar</Button>

      </Widget.Content>

    </Widget>
  );
}
