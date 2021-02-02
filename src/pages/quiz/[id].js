import { ThemeProvider } from 'styled-components';
import QuizPage from '../../screens/Quiz';
import db from '../../utils/db.json';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizPage
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');

  const dbExterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
    .then((respostaServidor) => {
      if (respostaServidor.ok) {
        return respostaServidor.json();
      }

      throw new Error('Falha em obter dados');
    });

  return {
    props: {
      dbExterno,
    },
  };
}
