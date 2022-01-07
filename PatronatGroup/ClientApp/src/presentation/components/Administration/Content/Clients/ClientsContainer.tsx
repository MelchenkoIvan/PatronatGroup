import { RootState } from "../../../../../application/store/store";
import * as actions from "../../../../../application/store/actions/adminActions";
import { connect } from "react-redux";
import TranslateHoc from "../../../../../infrastructure/Common/hoc/TranslateHoc";
import Clients from "./Clients";
import { get } from "lodash";

const mapStateToProps = (state: RootState) => {
  return {
    clients: get(state, "administration.clients"),
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    onGetPage: () => dispatch(actions.GetClients()),
  };
};

export default TranslateHoc(
  connect(mapStateToProps, mapDispatchToProps)(Clients)
);