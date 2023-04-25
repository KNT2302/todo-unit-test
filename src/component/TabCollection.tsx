import React, { ReactNode } from 'react'

interface TabCollectionI {
  tabItems: ReactNode[]
}
const TabCollection:React.FC<TabCollectionI> = ({tabItems}) => {


  return (
    <>{
      tabItems.map((_,index)=>{
        return 
      })
    }</>
  )
}

export default TabCollection
