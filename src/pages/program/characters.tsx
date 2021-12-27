import type { NextPage } from "next";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Characters} from "../../types/characters";


const ProgramCharacters: NextPage = () => {
  const name = 'characters';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((charactersData: Characters)=>{
          const {name, gender}= charactersData;
          return (
            <div key="">
              <h1>{gender}</h1>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramCharacters;