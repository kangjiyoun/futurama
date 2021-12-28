import type { NextPage } from "next";
import styled from "@emotion/styled"

const ProgramMain: NextPage = () => {

  return (
    <div>
      <Intro>
        <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png" alt="Futurama"></img>
        <TxtBox>
          <NameTxt>Futurama</NameTxt>
          <DescTxt>Here you can find everything from Episodes to Characters to Trivia Questions, and even some of the Products featured on the show.</DescTxt>
        </TxtBox>
        </Intro>
    </div>
  )

}

export default ProgramMain;

const Intro = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 120px;
  margin-top: 70px;
  background: #2e79eb;
  color: #fff;
  box-sizing: border-box;
`

const TxtBox = styled.div`
  padding-left: 80px;
  box-sizing: border-box;
`

const NameTxt = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 40px;
`

const DescTxt = styled.p`
  font-size: 25px;
  line-height: 1.4;
`