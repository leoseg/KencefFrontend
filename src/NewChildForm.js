import * as React from 'react'
import './NewChildForm.css';
import {Alert} from 'react-alert'


class NewChildForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            adress:'',
            birthdate:'',
            godparentName:''
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
        const {item} = this.state;
        await fetch('/addChild/',
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
                    this.state =  {
                        name: '',
                        adress:'',
                        birthdate:'',
                        godparentName:''
                    };
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
                    Adress
                    <input name = "adress" type="text" value={this.state.adress} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Birthdate:
                    <input name= "birthdate" type="text" value={this.state.birthdate} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Godparent Name:
                    <input name = "godparentName" type="text" value={this.state.godparentName} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NewChildForm