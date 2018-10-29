import React from 'react';

export default class NewApplication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: null,
            position: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(stateProperty, formValue) {
        console.log("Update form state", stateProperty, formValue.target.value);
        this.setState({
            [stateProperty]: formValue.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Company Name" 
                        onChange={(event) => this.handleChange("companyName", event)}
                    />
                    <input 
                        type="text" 
                        placeholder="Position" 
                        onChange={(event) => this.handleChange("position", event)}
                    />
                </form>
            </div>
        )
    }
}