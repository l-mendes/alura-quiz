import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Widget from '../../components/Widget';
import Footer from '../../components/Footer';
import QuizBackground from '../../components/QuizBackground';
import GitHubCorner from '../../components/GitHubCorner';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from '../../components/QuestionWidget';
import Loader from '../../components/Loader';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Loader />
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;
  const acertos = results.filter((x) => x).length;
  const labelCongrats = acertos >= 1 ? `Parabéns ${name}!` : `Que pena ${name}!`;
  const labelResult = acertos >= 1
    ? `Você acertou ${acertos} de ${results.length} perguntas`
    : `Você não acertou nenhuma das ${results.length} perguntas`;

  return (
    <Widget>
      <Widget.Header>
        Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          {labelCongrats}
          <br />
          {labelResult}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result_${index + 1}`}>
              {`Resultado pergunta ${index + 1}: `}
              {result ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);
  const [selectedAlternative, setSelectedAlternative] = useState();
  const db = externalBg;

  const questions = externalQuestions;
  const totalQuestions = questions.length;
  const question = questions[currentQuestion];

  const handleQuizSubmit = () => {
    if (question.answer === selectedAlternative) {
      setResults([...results, true]);
    } else {
      setResults([...results, false]);
    }

    if (currentQuestion === totalQuestions - 1) {
      setScreenState(screenStates.RESULT);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSelectedAlternative = (alternative) => {
    setSelectedAlternative(alternative);
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            onSubmit={handleQuizSubmit}
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={totalQuestions}
            answer={question.answer}
            onSelectAlternative={handleSelectedAlternative}
          />
        )}
        {screenState === screenStates.LOADING && (
          <LoadingWidget />
        )}

        {screenState === screenStates.RESULT && (
          <ResultWidget
            results={results}
          />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
