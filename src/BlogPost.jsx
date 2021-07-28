import styled from "styled-components";

function BlogPost({ Picture, Platform, DevName, SoftName, Cost, DisRate }) {
  return (
    <Wrapper>
      <Title></Title>
      <Title></Title>
      <table>
        <thead>
          <tr>
            <th rowSpan="4">{Picture}</th>
            <th>{DevName}</th>
            <th rowSpan="2">
              <img src={Platform} alt="My PIC" width="100" height="200"></img>
            </th>
          </tr>
          <tr>
            <td rowSpan="2">{SoftName}</td>
          </tr>
          <tr>
            <td rowSpan="2">{DisRate}</td>
          </tr>
          <tr>
            <td>{Cost}</td>
          </tr>
        </thead>
      </table>
      <p></p>
      <p></p>
      <p></p>
    </Wrapper>
  );
}

const Title = styled.h2`
  margin-bottom: 8px;
`;

const Wrapper = styled.article`
  border: 0px solid;
  background-color: #f0f5f9;
  border-radius: 8px;
  padding: 16px;
  margin: 16px auto;
  max-width: 540px;
  max-height: 120px;
`;

export default BlogPost;
