import GlobalStyle from "./GlobalStyle";
import BlogPost from "./BlogPost";

function App() {
  return (
    <>
      <GlobalStyle />
      <BlogPost
        DevName="마이크로소프트"
        SoftName="마인크래프트"
        Cost="30,000 → 15,000"
        DisRate="50%"
      >
        이번 포스팅에서는 Styled Components로 전역 스타일을 정의하는 방법에
        대해서 알아보겠습니다.
      </BlogPost>
    </>
  );
}

export default App;
