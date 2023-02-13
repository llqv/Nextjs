import styled from 'styled-components';

const styled = styled.default; //normailly import from npm mmodules

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
 const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

class Application extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Hello World, this is my first styled component!
        </Title>
      </Wrapper>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('content'));