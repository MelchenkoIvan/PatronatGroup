import { RootState } from "../../../../../application/store/store";
import * as actionsAdmin from "../../../../../application/store/actions/adminActions"
import * as actionsHome from "../../../../../application/store/actions/homeActions"
import { connect } from "react-redux";
import TranslateHoc from "../../../../../infrastructure/Common/hoc/TranslateHoc";
import { get } from "lodash";
import Employees from "./Employees";

const mapStateToProps = (state: RootState) => {
  return {
    lawyers: get(state, "homePage.command"),
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    onGetPage: () => dispatch(actionsHome.GetLawyers()),
  };
};

export default TranslateHoc(
  connect(mapStateToProps, mapDispatchToProps)(Employees)
);
