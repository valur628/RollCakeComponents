import styled from "styled-components";

function BlogPost({ Picture, DevName, SoftName, Cost, DisRate }) {
  return (
    <Wrapper>
      <Title>{Picture}</Title>
      <Title>{DevName}</Title>
      <p>{SoftName}</p>
      <p>{Cost}</p>
      <p>{DisRate}</p>
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
