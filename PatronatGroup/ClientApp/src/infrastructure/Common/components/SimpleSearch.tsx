import React, { FC } from "react";
import { Search } from "semantic-ui-react";

interface PropsType{
    loading: boolean,
    onSearch: (value: string) => void,
    searchingValue: string
}

const SimpleSearch:FC<PropsType> = (props) => {
  
    return (
    <Search
      showNoResults={false}
      loading={props.loading}
      value={props.searchingValue}
      onSearchChange={(e:any,data:any) => {props.onSearch(data.value)}}
    />
  );
};

export default SimpleSearch;
