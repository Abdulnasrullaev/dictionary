import styled from "styled-components";

export const DictionaryWrapper = styled.div`
  width: 1100px;
margin: auto;
display: flex;
background-color: lightcyan;
center{
    margin: 0px 25px auto;
position: absolute;
left: 100px;
padding: 10px;
text-transform: capitalize;
font-size: 40px;
font-weight: bold;
width: 1100px;

background-color:red;
}

`;

export const Half = styled.div`
  width: 50%;
  margin: 100px auto;
.create{
    font-size: 24px;
    text-transform: capitalize;
    font-weight: bolder;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;
export const Halfs = styled.div`
  width: 400px;
  padding: 20px;
  background-color: sienna;
  color: white;
  height: fit-content;
  margin: 100px 40px;
  b{
      margin: 3px;
      font-weight: 500;
  }
  p{
      width: fit-content;
      border-radius: 30px;
      margin: 10px 30px;
      background-color: greenyellow;
  }
  .ts{
      width: 80px;
     margin: -40px 130px;
      padding: 4px;
      position: relative;
      top: -20px;
      background-color: skyblue;
      text-align: center;
  }
  .pos{
      width: 80px;
      text-align: center;
      padding: 4px;
  }
  div{
      b{
          margin: 20px auto;
      }
  }
  .text{
      font-weight: 500;
      display: inline-flex;
      margin: -40px 0px 10px 10px;
  }
  .text2{
      width: fit-content;
      padding: 5px 15px 5px 15px;
      border-radius: 40px;
      background-color: brown;
      margin: 100px 8px;
  }
  .divs{
      margin: 20px;
  }

`;

export const Phone = styled.div`
  margin: 30px auto;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
`;

