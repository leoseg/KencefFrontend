import * as React from 'react'
import './NewChildForm.css';
import {Alert} from 'react-alert'
import ReactDatePicker from "react-datepicker";
import { useForm ,Controller} from "react-hook-form";

class NewChildForm extends React.Component {

    constructor(props) {
        super(props);
        const { Controller } = useForm();
        this.state = {
            name: '',
            address:'',
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
        const item = this.state;
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
                    this.setState(  {
                        name: '',
                        adress:'',
                        birthdate:'',
                        godparentName:''
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
                    Adress
                    <input name = "address" type="text" value={this.state.adress} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Birthdate:
                    <Controller
                        as={ReactDatePicker}
                        control={control}
                        valueName="birthdate" // DateSelect value's name is selected
                        onChange={this.handleChange()}
                        name="ReactDatepicker"
                        className="input"
                        placeholderText="Select date"
                    />
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