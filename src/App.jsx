import GlobalStyle from "./GlobalStyle";
import MediumCardItem from "./Compo_cards";

function App() {
  return (
    <>
      <GlobalStyle />
      <MediumCardItem
        Picture="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Minecraft-360.png?raw=true"
        DevName="마이크로소프트"
        SoftName="마인크래프트"
        Cost="30,000 → 15,000"
        DisRate="50%"
        Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
      ></MediumCardItem>
    </>
  );
}

export default App;
