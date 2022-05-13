import * as React from 'react'
import './NewChildForm.css';

class NewChildForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            adress:'',
            birthdate:'',
            godparentName:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault()
        const {item} = this.state;
        await fetch('/addChild',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Adress:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Birthdate:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Godparent Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NewChildForm