import { RootState } from "../../../../../application/store/store";
import * as actionsAdmin from "../../../../../application/store/actions/adminActions"
import { connect } from "react-redux";
import TranslateHoc from "../../../../../infrastructure/Common/hoc/TranslateHoc";
import { get } from "lodash";
import Employees from "./Admins";
import Sc from "../../../../../application/models/Sc";
import { Lawyer } from "../../../../../application/models/Lawyers";
import Admins from "./Admins";
import { Login } from "../../../../../application/models/User";

const mapStateToProps = (state: RootState) => {
  return {
    admins: get(state, "administration.admins"),
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    onGetPage: (sc:Sc) => dispatch(actionsAdmin.GetAdmins(sc)),
    register: (user:Login) => dispatch(actionsAdmin.Register(user))
   // onRowDelete: (login: string) => dispatch(actionsAdmin.DeleteLawyer(login)),
  };
};

export default TranslateHoc(
  connect(mapStateToProps, mapDispatchToProps)(Admins)
);
