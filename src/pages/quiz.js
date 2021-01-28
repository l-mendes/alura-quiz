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

export default function QuizPage() {
  const { questions } = db;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        {questions.map((question, index) => (
          <QuestionWidget
            question={question}
            index={index}
          />
        ))}
        <LoadingWidget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
