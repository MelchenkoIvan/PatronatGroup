import { get } from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../../application/store/actions/homeActions';
import { RootState } from '../../../../application/store/store';
import CommandBlok from './CommandBlok';

const mapStateToProps = (state:RootState) => {
    return{
        command: get(state, 'homePage.command')
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        onGetPage: () => dispatch(actions.GetLawyers())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(CommandBlok);