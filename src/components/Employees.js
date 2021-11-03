import React, { Component } from 'react'
import './Employees.css'
import EmpData from './EmpData'
import * as ReactBootStrap from 'react-bootstrap'

class Employees extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             usersData: [],
             loading: true

        }
    }

    componentDidMount () {
        setTimeout(() => {this.fetchApi() }, 2000); 
    }

    fetchApi=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => this.setState({usersData : json, loading : false}));
        
    }
    
    render() {
        return (
            <div>
            {this.state.loading ? <ReactBootStrap.Spinner animation="border" /> : null}
            
                {
                   this.state.usersData.map(function(item, index){
                       return (
                           <div className="components" key={index}>
                           <EmpData data={item}/>
                           </div>
                       )
                   })
                }
            </div>
        )
    }
}

export default Employees
