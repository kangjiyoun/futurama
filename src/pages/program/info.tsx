import type { NextPage } from "next";
import { Error, Loading  } from "../../components";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Info} from "../../types/Info";
import styled from "@emotion/styled"


const ProgramInfo: NextPage = () => {
  const name = 'info';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <PageTit>{name}</PageTit>
      {data.map((infoData: Info)=>{
          const {synopsis, yearsAired, creators, id}= infoData;
          return (
            <div key={id}>
              <InfoBox>
                <InfoTit>synopsis</InfoTit>
                <dd>{synopsis}</dd>
              </InfoBox>
              <InfoBox>
                <InfoTit>yearsAired</InfoTit>
                <dd>{yearsAired}</dd>
              </InfoBox>
              <InfoBox>
                <InfoTit>creators(name)</InfoTit>
                <dd>{creators[0].name}</dd>
                <dd>{creators[1].name}</dd>
              </InfoBox>
            </div>
          )
        })}
    </div>
  )
}

export default ProgramInfo;

const PageTit = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`

const InfoBox = styled.dl`
  margin-bottom: 20px;
`

const InfoTit = styled.dt`
  padding: 8px 15px;
  margin-top: 30px;
  margin-bottom: 15px;
  background: #2e79eb;
  border-radius: 5px;
  color: #fff;
  font-size: 17px;
  font-weight: normal;
  line-height: 1.4;
`