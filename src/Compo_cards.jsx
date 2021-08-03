import styled from "styled-components";
import "./Compo_cards.css";

function MediumCardItem({
  Picture,
  Platform,
  DevName,
  SoftName,
  BeforeCost,
  AfterCost,
  DisRate
}) {
  return (
    <MedWrapperDiv>
      <MedWrapperTable>
        <thead>
          <tr>
            <MedSoftImageTd rowSpan="4">
              <MedSoftImage>
                <img
                  src={Picture}
                  alt="MainPicture"
                  width="100%"
                  height="100%"
                ></img>
              </MedSoftImage>
            </MedSoftImageTd>
            <MedDevStringTd>
              <MedDevString>{DevName}</MedDevString>
            </MedDevStringTd>
            <MedPlatImageTd rowSpan="2">
              <MedPlatImage>
                <img
                  src={Platform}
                  alt="MainPlatform"
                  width="40px"
                  height="40px"
                ></img>
              </MedPlatImage>
            </MedPlatImageTd>
          </tr>
          <tr>
            <MedSoftStringTd rowSpan="2">
              <MedSoftString>{SoftName}</MedSoftString>
            </MedSoftStringTd>
          </tr>
          <tr>
            <MedRateStringTd rowSpan="2">
              <MedRateString>{DisRate}</MedRateString>
            </MedRateStringTd>
          </tr>
          <tr>
            <MedCostStringTd>
              <MedBeforeCostString>{BeforeCost}</MedBeforeCostString>
              &nbsp;→&nbsp;
              <MedAfterCostString>{AfterCost}</MedAfterCostString>
            </MedCostStringTd>
          </tr>
        </thead>
      </MedWrapperTable>
    </MedWrapperDiv>
  );
}

const MedWrapperDiv = styled.article`
  border: 0px solid black;
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 120px;
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
`;

const MedWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 120px;
`;

const MedSoftImageTd = styled.td`
  width: 32%;
  vertical-align: center;
  text-align: center;
`;

const MedSoftImage = styled.div`
  padding-top: 6%;
  padding-bottom: 3.7%;
  padding-left: 7%;
  width: 85%;
`;

const MedDevStringTd = styled.td`
  height: 30%;
  font-size: 15px;
  color: #a9abad;
  text-align: left;
  vertical-align: bottom;
  font-weight: normal;
  font-style: normal;
  padding-top: 2.5%;
`;

const MedDevString = styled.text`
  border: 0px solid black;
  font-weight: normal;
  font-style: normal;
`;

const MedSoftStringTd = styled.td`
  vertical-align: top;
`;

const MedSoftString = styled.text`
  border: 0px solid black;
  font-weight: 900;
  font-size: 25px;
`;

const MedCostStringTd = styled.td`
  width: 48%;
  vertical-align: bottom;
  padding-bottom: 3%;
`;

const MedBeforeCostString = styled.text`
  border: 0px solid black;
  text-decoration: line-through;
  color: #f7c9c5;
  font-weight: bold;
  font-size: 15px;
`;

const MedAfterCostString = styled.text`
  border: 0px solid black;
  color: #e74333;
  font-weight: bold;
  font-size: 15px;
`;

const MedPlatImageTd = styled.td`
  width: 20%;
  height: 60%;
  text-align: center;
  padding-top: 2%;
`;

const MedPlatImage = styled.text`
  border: 0px solid black;
  text-align: center;
`;

const MedRateStringTd = styled.td`
  width: 20%;
  height: 40%;
  vertical-align: bottom;
  padding-bottom: 2.2%;
  text-align: right;
`;

const MedRateString = styled.text`
  border: 0px solid black;
  padding-right: 9%;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
`;
export default MediumCardItem;
