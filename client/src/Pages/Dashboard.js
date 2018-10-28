import React from 'react';
import { Redirect } from 'react-router-dom'

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.redirectPage(null);
    }
    
    render() {
        if( this.props.redirect) {
            return <Redirect to={{ pathname: this.props.redirect }} />
        } else {
            return <div>Dashboard</div>
        }
    }
}