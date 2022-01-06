import { connect } from 'react-redux';
import { RootState } from '../../../../../application/store/store';
import NavBar from './NavBar';
import * as actions from "../../../../../application/store/actions/userActions"


const mapStateToProps = (state:RootState) => {
    return{
        admin: state.administration.admin,
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        //login: (user:User) => dispatch(actions.Login(user))
        onGetPage: () => dispatch(actions.GetClients())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(NavBar);