import React from 'react';
import { Redirect } from 'react-router-dom';
import API from '../Utilities/API';
import Table from '../Components/Table';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            applications: null
        }
        this.displayTable = this.displayTable.bind(this);
    }

    componentWillMount() {
        console.log("In componentWillMount");
        
        this.props.redirectPage(null);
    }

    componentDidMount() {
        console.log("this.props.userId", this.props);
        API.getAllApplications(this.props.userId)
        .then(response => {
            console.log("response", response);
            this.setState({applications: response.data});
            console.log("this.state.applications", this.state.applications);
            
        })
    }

    displayTable() {
        return <Table applications={this.state.applications} />
    }
    
    render() {
        if( this.props.redirect) {
            console.log("Dashboard redirect", this.props);
            
            return <Redirect to={{ pathname: this.props.redirect }} />
        } else {
            return (
                <div>
                    {this.displayTable()}
                </div>
            )
        }

        // return <div>Dashboard</div>
    }
}