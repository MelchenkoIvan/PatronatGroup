import React, { FC } from 'react'
import { Pagination } from 'semantic-ui-react'
import Sc from '../../../application/models/Sc'
interface PropsType {
  totalCount:number,
  currentPageNumber:number,
  onCnahge: (sc:Sc) => void;
}

const TablePaginationg:FC<PropsType> = (props) => {
  const onChange = (e:any, pageInfo:any) =>{
    props.onCnahge({rowsOnPage:1,pageNumber:pageInfo.activePage})
  }
  return(
    <Pagination
      boundaryRange={0}
      defaultActivePage={props.currentPageNumber || 1}
      onPageChange={onChange}
      siblingRange={1}
      totalPages={props.totalCount/1}
    />
  )
}
  
  export default TablePaginationg