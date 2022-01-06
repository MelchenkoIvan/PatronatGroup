import React from 'react'
import { connect } from 'react-redux';
import ToContactUs from '../../../../application/models/ToContactUs';
import * as actions from '../../../../application/store/actions/homeActions';
import { RootState } from '../../../../application/store/store';
import AboutCompanyBlok from './AboutCompanyBlok';

const mapStateToProps = (state: RootState) => {
    return{
    }
};
let mapDispatchToProps = (dispatch:any) =>{
    return{
        onSubmit: (values:ToContactUs) => dispatch(actions.Submit(values))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(AboutCompanyBlok);