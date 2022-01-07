import { connect } from 'react-redux';
import * as actions from '../../../application/store/actions/adminActions'
import { RootState } from '../../../application/store/store';
import { Login } from '../../../application/models/User';
import RegisterForm from './RegisterForm';


const mapStateToProps = (state:RootState) => {
    return{
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        register: (user:Login) => dispatch(actions.Register(user))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);