import { LargeCardItem } from "./Compo_cards";
import { MediumCardItem } from "./Compo_cards";
import { SmallCardItem } from "./Compo_cards";

function App() {
  const abc = "140%";
  return (
    <>
      <LargeCardItem
        Picture="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Minecraft-360.png?raw=true"
        DevName="마이크로소프트"
        SoftName="마인크래프트"
        BeforeCost="30,000"
        AfterCost="15,000"
        DisRate={abc}
        Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
      ></LargeCardItem>
      <br></br>
      <MediumCardItem
        Picture="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Minecraft-360.png?raw=true"
        DevName="마이크로소프트"
        SoftName="마인크래프트"
        BeforeCost="30,000"
        AfterCost="15,000"
        DisRate={abc}
        Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
      ></MediumCardItem>
      <br></br>
      <SmallCardItem
        DevName="마이크로소프트"
        SoftName="마인크래프트"
        BeforeCost="30,000"
        AfterCost="15,000"
        Platform="https://github.com/wncjf2000/RollCakeComponents/blob/main/pic/Steam_icon_logo.png?raw=true"
      ></SmallCardItem>
    </>
  );
}

export default App;
