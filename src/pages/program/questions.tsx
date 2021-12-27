import type { NextPage } from "next";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Question} from "../../types/question";


const ProgramQuestions: NextPage = () => {
  const name = 'questions';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((questionData: Question)=>{
          const {id, question}= questionData;
          return (
            <div key="">
              <h1>{question}</h1>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramQuestions;