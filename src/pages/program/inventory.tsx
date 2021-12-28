import type { NextPage } from "next";
import { Error, Loading  } from "../../components";
import { useInfoData } from "../../hooks/useFuturamaData";
import { Inventory } from "../../types/inventory";
import styled from "@emotion/styled";


const ProgramInventory: NextPage = () => {
  const name = 'inventory';
  const { data, error } = useInfoData(name)

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <div>
      <main>
      {data.map((inventoryData: Inventory)=>{
          const {title, category, description, price, stock}= inventoryData;
          return (
            <InvenItem key="">
                <ItemTit>{title}</ItemTit>
                <dd>{description}</dd>
                <ItemInfo>category : {category} / price : {price} / stock : {stock}</ItemInfo>
            </InvenItem>
          )
        })}
      </main>
    </div>
  )
}

export default ProgramInventory;


const InvenItem = styled.dl`
border: 1px solid #ddd;
padding: 20px;
margin-bottom: 20px;
`

const ItemTit = styled.dt`
margin-bottom: 5px;
color: #2e79eb;
font-size: 18px;
font-weight: 700;
`

const ItemInfo = styled.dd`
margin-top: 15px;
color: #999;
font-weight: 700;
`