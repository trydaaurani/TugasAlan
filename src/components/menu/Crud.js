import Navigation from './components/Navigation'
import tambahMenu from './tambahMenu'


export default class Crud extends Components{
    constructor(props) {
        super(props);
    
        this.state = {
             makanan : [],
             nama : "",
             harga:0,
             id: "",
        }
    }

    handleChange = (event) => {
        console.log(event.target.value) 
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data : ",this.state);
    }
    
    render(){
        return(
            <div>
                <tambahMenu {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />

            </div>
        )
    }

}