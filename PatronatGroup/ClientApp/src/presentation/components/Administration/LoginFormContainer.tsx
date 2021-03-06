import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import * as actions from '../../../application/store/actions/adminActions'
import { RootState } from '../../../application/store/store';
import { Login } from '../../../application/models/User';


const mapStateToProps = (state:RootState) => {
    return{
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        login: (user:Login) => dispatch(actions.Login(user))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);