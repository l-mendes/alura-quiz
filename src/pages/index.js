import styled from 'styled-components';
import db from '../utils/db.json';
import Widget from '../components/Widget';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

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
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Laravel - The PHP Framework For Web Artisans</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Laravel - The PHP Framework For Web Artisans</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}