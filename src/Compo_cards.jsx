import styled from "styled-components";
import "./Compo_cards.css";

function MediumCardItem({
  Picture,
  Platform,
  DevName,
  SoftName,
  Cost,
  DisRate
}) {
  return (
    <MedWrapperDiv>
      <MedWrapperTable>
        <thead>
          <tr>
            <MedSoftImageTh rowSpan="4">
              <MedSoftImage>
                <img
                  src={Picture}
                  alt="My PIC"
                  width="100%"
                  height="100%"
                ></img>
              </MedSoftImage>
            </MedSoftImageTh>
            <th>
              <MedDevString>{DevName}</MedDevString>
            </th>
            <MedPlatImageTh rowSpan="2">
              <MedPlatImage>
                <img
                  src={Platform}
                  alt="My PIC"
                  width="100%"
                  height="100%"
                ></img>
              </MedPlatImage>
            </MedPlatImageTh>
          </tr>
          <tr>
            <td rowSpan="2">
              <MedSoftString>{SoftName}</MedSoftString>
            </td>
          </tr>
          <tr>
            <td rowSpan="2">
              <MedRateString>{DisRate}</MedRateString>
            </td>
          </tr>
          <tr>
            <td>
              <MedCostString>{Cost}</MedCostString>
            </td>
          </tr>
        </thead>
      </MedWrapperTable>
    </MedWrapperDiv>
  );
}

const MedWrapperDiv = styled.article`
  width: 540px;
  height: 120px;
  object-fit: cover;
  border: 0px solid black;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 10px;
`;

const MedWrapperTable = styled.table`
  border: 1px solid black;
  width: 540px;
  height: 120px;
`;

const MedSoftImageTh = styled.th`
  width: 168px;
  height: 99px;
`;

const MedSoftImage = styled.div`
  margin-left: 10px;
  width: 148px;
  height: 99px;
`;

const MedDevString = styled.div`
  margin-top: 5px;
  font-weight: normal;
  font-style: normal;
`;

const MedSoftString = styled.div``;

const MedCostString = styled.div``;

const MedPlatImageTh = styled.th`
  width: 40px;
  height: 40px;
  display: block;
  margin: 0px auto;
  margin-top: 10px;
`;

const MedPlatImage = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40x;
`;

const MedRateImageTh = styled.th`
  width: 40px;
  height: 40px;
  display: block;
  margin: 0px auto;
  margin-top: 10px;
`;

const MedRateString = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  font-size: 40px;
`;

export default MediumCardItem;
