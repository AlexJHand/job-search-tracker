import React from 'react';
import { Redirect } from 'react-router-dom';
import API from '../Utilities/API';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("In componentWillMount");
        
        this.props.redirectPage(null);
    }

    componentDidMount() {
        console.log("this.props.userId", this.props);
        API.getAllApplications(this.props.userId)
        .then(response => console.log("response", response))
    }
    
    render() {
        if( this.props.redirect) {
            return <Redirect to={{ pathname: this.props.redirect }} />
        } else {
            return <div>Dashboard</div>
        }

        // return <div>Dashboard</div>
    }
}