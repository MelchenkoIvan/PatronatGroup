import React,{ FC } from "react";
import NavBarContainer from "./Menu/NavBarContainer";

//style

interface PropsType {
  
}

const AdminPage: FC<PropsType> = (props) => {
  return (
    <div>
      <NavBarContainer />
    </div>
  );
};

export default AdminPage;
