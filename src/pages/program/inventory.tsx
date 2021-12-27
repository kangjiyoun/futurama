import type { NextPage } from "next";
import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";
import { useInfoData } from "../../hooks/useFuturamaData";
import { Inventory } from "../../types/inventory";


const ProgramInventory: NextPage = () => {
  const name = 'inventory';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((inventoryData: Inventory)=>{
          const {price, stock}= inventoryData;
          return (
            <div key="">
              <h1>{stock}</h1>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramInventory;