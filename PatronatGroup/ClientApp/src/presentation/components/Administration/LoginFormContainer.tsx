import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import * as actions from '../../../application/store/actions/userActions'
import User from '../../../application/models/User';
import { RootState } from '../../../application/store/store';


const mapStateToProps = (state:RootState) => {
    return{
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        login: (user:User) => dispatch(actions.Login(user))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);