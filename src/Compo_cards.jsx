import styled from "styled-components";

function MediumCardItem({
  Picture,
  Platform,
  DevName,
  SoftName,
  Cost,
  DisRate
}) {
  return (
    <WrapperDiv>
      <table>
        <WrapperTable>
          <thead>
            <tr>
              <th rowSpan="4">
                <SoftImage>
                  <img
                    src={Picture}
                    alt="My PIC"
                    width="100%"
                    height="100%"
                  ></img>
                </SoftImage>
              </th>
              <th>{DevName}</th>
              <th rowSpan="2">
                <PlatImage>
                  <img
                    src={Platform}
                    alt="My PIC"
                    width="100%"
                    height="100%"
                  ></img>
                </PlatImage>
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
        </WrapperTable>
      </table>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.article`
  width: 540px;
  height: 120px;
  object-fit: cover;
  border: 0px solid black;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 10px;
`;

const WrapperTable = styled.table`
  border: 0px solid black;
  width: 540px;
  height: 120px;
  object-fit: cover;
`;

const SoftImage = styled.th`
  width: 148px;
  height: 99px;
  object-fit: cover;
`;

const PlatImage = styled.th`
  float: left;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export default MediumCardItem;
