import MediumCardItem from "./Compo_cards";

function App() {
  const abc = "140%";
  return (
    <>
      <MediumCardItem
        Picture="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Minecraft-360.png?raw=true"
        DevName="마이크로소프트"
        SoftName="마인크래프트"
        BeforeCost="30,000"
        AfterCost="15,000"
        DisRate={abc}
        Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
      ></MediumCardItem>
    </>
  );
}

export default App;
