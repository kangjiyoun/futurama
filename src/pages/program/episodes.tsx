import type { NextPage } from "next";
import { Error, Loading  } from "../../components";
import { useInfoData } from "../../hooks/useFuturamaData";
import { Episodes } from "../../types/episodes";
import styled from "@emotion/styled"


const ProgramEpisodes: NextPage = () => {
  const name = 'episodes';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((episodesData: Episodes)=>{
          const {number, title, desc}= episodesData;
          return (
            <EpiBox key="">
              <strong>{number} / {title}</strong>
              <EpiDesc>{desc}</EpiDesc>
            </EpiBox>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramEpisodes;


const EpiBox = styled.article`
border: 1px solid #ddd;
padding: 20px;
margin-bottom: 20px;
color: #2e79eb;
font-size: 18px;
`

const EpiDesc = styled.p`
 padding-top: 10px;
 color: #666;
 font-size: 16px;
`