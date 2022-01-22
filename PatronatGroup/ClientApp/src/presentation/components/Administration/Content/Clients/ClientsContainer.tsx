import { RootState } from "../../../../../application/store/store";
import * as actions from "../../../../../application/store/actions/adminActions";
import { connect } from "react-redux";
import TranslateHoc from "../../../../../infrastructure/Common/hoc/TranslateHoc";
import Clients from "./Clients";
import { get } from "lodash";
import Sc from "../../../../../application/models/Sc";

const mapStateToProps = (state: RootState) => {
  return {
    clients: get(state, "administration.clients"),
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    onGetPage: (sc:Sc) => dispatch(actions.GetClients(sc)),
    onSearch: (sc:Sc) => dispatch(actions.SearchClients(sc)),
    onRowDelete: (id:number) => dispatch(actions.DeleteClient(id)),
  };
};

export default TranslateHoc(
  connect(mapStateToProps, mapDispatchToProps)(Clients)
);
