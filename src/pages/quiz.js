import { useState, useEffect } from 'react';
import Head from 'next/head';
import db from '../utils/db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import QuizBackground from '../components/QuizBackground';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';
import QuizContainer from '../components/QuizContainer';
import QuestionWidget from '../components/QuestionWidget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAlternative, setSelectedAlternative] = useState();

  const { questions } = db;
  const totalQuestions = questions.length;
  const question = questions[currentQuestion];

  const handleAlternativeChange = (e) => {

  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const answer = Number(e.target.question.value);
    if (question.answer === answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion === totalQuestions - 1) {
      setScreenState(screenStates.RESULT);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
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
            onChangeAlternative={handleAlternativeChange}
          />
        )}
        {screenState === screenStates.LOADING && (
          <LoadingWidget />
        )}

        {screenState === screenStates.RESULT && (
          <div>{`Você acertou ${correctAnswers} de ${totalQuestions}!`}</div>
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
