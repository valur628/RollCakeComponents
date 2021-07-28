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
        Platform="https://raw.githubusercontent.com/wncjf2000/RollCakeComponents/7ae81741d07918ed145bc527fbe0d55536d4246a/pic/Steam_icon_logo.svg"
      ></BlogPost>
    </>
  );
}

export default App;
