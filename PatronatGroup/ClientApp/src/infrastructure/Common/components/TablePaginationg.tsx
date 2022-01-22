import React, { FC } from 'react'
import { Pagination } from 'semantic-ui-react'
import Sc from '../../../application/models/Sc'
interface PropsType {
  rowsOnPage:number,
  totalCount:number,
  currentPageNumber:number,
  onCnahge: (sc:Sc) => void;
}

const TablePaginationg:FC<PropsType> = (props) => {
  const onChange = (e:any, pageInfo:any) =>{
    props.onCnahge({rowsOnPage:props.rowsOnPage,pageNumber:pageInfo.activePage})
  }
  const totalPages = props.totalCount/props.rowsOnPage;
  return(
    <Pagination
      boundaryRange={0}
      defaultActivePage={props.currentPageNumber || 1}
      onPageChange={onChange}
      siblingRange={1}
      totalPages={totalPages}
      disabled={totalPages <= 1 && true}
    />
  )
}
  
  export default TablePaginationg