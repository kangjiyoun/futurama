import type { NextPage } from "next";
import { Error, Loading  } from "../../components";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Characters} from "../../types/characters";
import styled from "@emotion/styled"


const ProgramCharacters: NextPage = () => {
  const name = 'characters';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <PageTit>{name}</PageTit>
      <CharContainer>
      {data.map((charactersData: Characters)=>{
          const {name, age, sayings, images}= charactersData;
          return (
              <CharItem key="">
                <CharImgBox>
                  <CharImg src={images.main} alt="프로필 이미지" />
                </CharImgBox>
                <CharName>
                  {name.first}
                  ({age})
                </CharName>
                <CharSay>
                  {sayings}
                </CharSay>
              </CharItem>
          )
        })}
      </CharContainer>
    </div>
  )
}

export default ProgramCharacters;

const PageTit = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`
const CharContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;;
  list-style: none;
`

const CharItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;;
  width: 48%;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  list-style: none;

  &:nth-child(2n) {
    margin-left: 4%
  }
`

const CharImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: #f6f6f6;
  overflow: hidden;
`

const CharImg = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 95%;
`


const CharName = styled.strong`
  padding: 4px 12px;
  margin-top: 10px;
  background: #2e79eb;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.4;
`

const CharSay = styled.p`
  max-width: 100%;
  padding: 8px 15px;
  border-radius: 5px;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`