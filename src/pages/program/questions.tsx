import type { NextPage } from "next";
import { Error, Loading  } from "../../components";
import { useInfoData } from "../../hooks/useFuturamaData";
import {Question} from "../../types/question";
import styled from "@emotion/styled"


const ProgramQuestions: NextPage = () => {
  const name = 'questions';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <PageTit>{name}</PageTit>
      {data.map((questionData: Question)=>{
          const {id, question, correctAnswer, possibleAnswers}= questionData;
          return (
            <div key="">
              <QuestionTxt>{question}</QuestionTxt>
              <ul>
                  {possibleAnswers.map((possibleAnswer: string) => {
                    return (
                    <AnsRow key={possibleAnswer}>
                      <input type="radio" id={possibleAnswer} name={question} value={possibleAnswer} />
                      <Label htmlFor={possibleAnswer}>{possibleAnswer}</Label>
                    </AnsRow>
                  );
                })}
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default ProgramQuestions;

const PageTit = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`
const QuestionTxt = styled.strong`
  display: block;
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

const AnsRow = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  line-height: 20px;
`

const Label = styled.label`
  padding-left: 8px;
`