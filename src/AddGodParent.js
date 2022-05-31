import * as React from 'react'



class AddGodParent extends React.Component {

    constructor(props) {
        super(props);
        this.childsList= [{
            "name":"No Data",
            "id":1000
        }];
        this.state = {
            name: '',
            email:'',
            paydate:'',
            godchilds:[],
            amount_to_pay:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target instanceof  HTMLSelectElement){
            var options = event.target.options;
            var childs = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                   childs.push(this.childsList[i]);
                }
            }
            this.setState({
                [event.target.name] : childs
            })
        }else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    async componentDidMount() {
        const response = await fetch('/child/get/');
        this.childsList = await response.json();
        if (!response.ok){
            console.log("Error while retrieving list of childs from database with status text: "+response.statusText)
        }
    }

    async handleSubmit(event) {
        event.preventDefault()
        const item = this.state;
        await fetch('/godparent/add/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            }).then(async response =>{
            if(!response.ok){
                console.log(response.statusText)
                alert("Daten konnten nicht gespeichert werden");
            }else{
                alert("Der Pate mit dem Namen "+this.state.name+" wurde gespeichert");
                this.setState(  {
                    name: '',
                    adress:'',
                    paydate:'',
                    godchilds:[],
                    amount_to_pay:''
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
                    Email:
                    <input name = "email" type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Zahlungsdatum:
                    <input name = "paydate" type="date" value={this.state.paydate} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Zu zahlender Betrag:
                    <input name = "amount_to_pay" type="text" value={this.state.amountToPay} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Wähle Patenkinder aus:
                    <select name= "godchilds" multiple={true} value={this.state.godchild} onChange={this.handleChange}>
                        { typeof this.childsList !== "undefined" ? this.childsList.map((element) => {
                            return <option key ={element.id} value={element} >{element.name}</option>;
                        }) : <option> key="default" value = "default">Error retrieving data </option> }
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default AddGodParent