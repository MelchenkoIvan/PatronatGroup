import { get } from 'lodash';
import { connect } from 'react-redux';
import Sc from '../../../application/models/Sc';
import * as actions from '../../../application/store/actions/homeActions';
import { RootState } from '../../../application/store/store';
import Command from './Command';


const mapStateToProps = (state:RootState) => {
    return{
        command: get(state, 'homePage.command')
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        onGetPage: (sc:Sc) => dispatch(actions.GetLawyers(sc))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Command);