import { RootState } from "../../../../../application/store/store";
import * as actionsAdmin from "../../../../../application/store/actions/adminActions"
import * as actionsHome from "../../../../../application/store/actions/homeActions"
import { connect } from "react-redux";
import TranslateHoc from "../../../../../infrastructure/Common/hoc/TranslateHoc";
import { get } from "lodash";
import Employees from "./Employees";
import Sc from "../../../../../application/models/Sc";
import { Lawyer } from "../../../../../application/models/Lawyers";

const mapStateToProps = (state: RootState) => {
  return {
    lawyers: get(state, "homePage.command"),
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    onGetPage: (sc:Sc) => dispatch(actionsHome.GetLawyers(sc)),
    onRowDelete: (id:number) => dispatch(actionsAdmin.DeleteLawyer(id)),
    onRowEdit: (value:Lawyer) => dispatch(actionsAdmin.UpdateLawyer(value)),
    onRowCreate: (value:Lawyer) => dispatch(actionsAdmin.CreateLawyer(value)),
  };
};

export default TranslateHoc(
  connect(mapStateToProps, mapDispatchToProps)(Employees)
);
