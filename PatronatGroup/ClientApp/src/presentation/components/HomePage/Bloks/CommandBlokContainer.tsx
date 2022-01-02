import { get } from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../../application/store/actions/homeActions';
import { InitialStateType } from '../../../../application/store/initialState';
import CommandBlok from './CommandBlok';

const mapStateToProps = (state:InitialStateType) => {
    return{
        command: get(state, 'homePage.command[0]')
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        onGetPage: () => dispatch(actions.GetLawyers())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(CommandBlok);