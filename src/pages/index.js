import styled from 'styled-components';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../utils/db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import QuizBackground from '../components/QuizBackground';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';
import Button from '../components/Button';
import Input from '../components/Input';
import ErrorSpan from '../components/ErrorSpan';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name) {
      router.push(`/quiz?name=${name}`);
    } else {
      setErrorName('Informe o seu nome para jogar!');
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Laravel - The PHP Framework For Web Artisans</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleFormSubmit}>
              <Input
                onChange={(e) => { setName(e.target.value); setErrorName(''); }}
                placeholder="Diz ai seu nome para jogar"
                value={name}
              />
              <Button type="submit">
                JOGAR
                {' '}
                {name}
              </Button>
              {errorName && (<ErrorSpan>{errorName}</ErrorSpan>)}
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
