import * as React from 'react'
import './AddChild.css';


class AddChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address:'',
            birthdate:'',
        };
        console.log("logging works!")
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
        const item = this.state;
        await fetch('/child/add/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            }).then(async response =>{
                if(!response.ok){
                    alert("Daten konnten nicht gespeichert werden");
                }else{
                    alert("Das Kind mit dem Namen "+this.state.name+" wurde gespeichert");
                    this.setState(  {
                        name: '',
                        adress:'',
                        birthdate:''
                    });
                }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name = "name" type ="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Adresse:
                    <input name = "address" type="text" value={this.state.adress} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Geburtsdatum:
                    <input name = "birthdate" type="date" value={this.state.birthdate} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default AddChild