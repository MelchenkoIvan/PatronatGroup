import { connect } from 'react-redux';
import { RootState } from '../../../../../application/store/store';
import NavBar from './NavBar';
import * as actions from "../../../../../application/store/actions/adminActions"
import TranslateHoc from '../../../../../infrastructure/Common/hoc/TranslateHoc';
import { get } from 'lodash';


const mapStateToProps = (state:RootState) => {
    return{
        admin: get(state, 'administration.admin')
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        Logout: () => dispatch(actions.Logout()),
        onGetPage: () => dispatch(actions.GetClients())
    }
};



export default TranslateHoc(connect(mapStateToProps, mapDispatchToProps)(NavBar));