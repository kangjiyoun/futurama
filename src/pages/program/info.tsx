import type { NextPage } from "next";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Info} from "../../types/Info";


const ProgramInfo: NextPage = () => {
  const name = 'info';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <h1>테스트</h1>
      <main>
      {data.map((infoData: Info)=>{
          const {synopsis, yearsAired, creators, id}= infoData;
          return (
            <div key="">
              <h1>{synopsis}</h1>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramInfo;