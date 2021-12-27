import type { NextPage } from "next";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useInfoData } from "../../hooks/useFuturamaData";
import { Episodes } from "../../types/episodes";


const ProgramEpisodes: NextPage = () => {
  const name = 'episodes';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((episodesData: Episodes)=>{
          const {title, writers}= episodesData;
          return (
            <div key="">
              <h1>{writers}</h1>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramEpisodes;