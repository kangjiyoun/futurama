import type { NextPage } from "next";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Cast} from "../../types/cast";


const ProgramCast: NextPage = () => {
  const name = 'cast';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((castData: Cast)=>{
          const {name, born}= castData;
          return (
            <div key="">
              <h1>{born}</h1>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramCast;