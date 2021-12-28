import type { NextPage } from "next";
import { Error, Loading  } from "../../components";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Cast} from "../../types/cast";
import styled from "@emotion/styled"


const ProgramCast: NextPage = () => {
  const name = 'cast';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <PageTit>{name}</PageTit>
      <CastList>
      {data.map((castData: Cast)=>{
          const {name, born}= castData;
          return (
            <CastItem key="">
              <strong>{name}</strong>
              <span>{born}</span>
            </CastItem>
          )
        })}
      </CastList>
    </div>
  )
}

export default ProgramCast;

const PageTit = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.2%;
  padding: 10px 0;
  margin-right: 2.4%;
  margin-bottom: 20px;
  border: 1px solid #2e79eb;
  list-style: none;

  &:nth-child(4n) {
    margin-right: 0;
  }

`
