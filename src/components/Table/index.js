import React, {Component} from "react";
import API from "../../util/API.js";
import TableHead from "../TableHead";
import TableDiv from "../TableDiv";


class Table extends Component{
    
    state = {
        employeesCopy: [],
        employees: []
    }

componentDidMount(){
    API.getDefault()
    .then(res => { this.setState({employees: res.data.results, employeesCopy: res.data.results})})
    .catch(err => console.log(err))
}

handleFirstNameFilter = event => {
    console.log(event)
    const newEmployees = this.state.employees.filter(employee =>{
       const regexp = RegExp(event, "gi")
        return employee.name.first.match(regexp)
    })
    if(event === ""){
        this.setState({employees: this.state.employeesCopy})
    }
    else{this.setState({employees: newEmployees})}
}

handleLastNameFilter = event => {
    console.log(event)
    const newEmployees = this.state.employees.filter(employee =>{
       const regexp = RegExp(event, "gi")
        return employee.name.last.match(regexp)
    })
    if(event === ""){
        this.setState({employees: this.state.employeesCopy})
    }
    else{this.setState({employees: newEmployees})}
}

handleUsernameFilter = event => {
    console.log(event)
    const newEmployees = this.state.employees.filter(employee =>{
       const regexp = RegExp(event, "gi")
        return employee.login.username.match(regexp)
    })
    if(event === ""){
        this.setState({employees: this.state.employeesCopy})
    }
    else{this.setState({employees: newEmployees})}
}

handleEmailFilter = event => {
    console.log(event)
    const newEmployees = this.state.employees.filter(employee =>{
       const regexp = RegExp(event, "gi")
        return employee.email.match(regexp)
    })
    if(event === ""){
        this.setState({employees: this.state.employeesCopy})
    }
    else{this.setState({employees: newEmployees})}
}

handlePhoneFilter = event => {
    console.log(event)
    const newEmployees = this.state.employees.filter(employee =>{
       const regexp = RegExp(event, "gi")
        return employee.phone.match(regexp)
    })
    if(event === ""){
        this.setState({employees: this.state.employeesCopy})
    }
    else{this.setState({employees: newEmployees})}
}

handleContactSort = field => {
		const employees = this.state.employees.sort((a, b) => {
			if (a[field] < b[field]) return -1;
			if (a[field] > b[field]) return 1;
			return 0;
		});

		this.setState({ employees: employees });
    };
    
handleNameSort = field => {
	const employees = this.state.employees.sort((a, b) => {
            
        let aa=a.name, bb=b.name;

		if (aa[field] < bb[field]) return -1;
		if (aa[field] > bb[field]) return 1;
		return 0;
    	});

	this.setState({ employees: employees });
};
    
handleUsernameSort = field => {
	const employees = this.state.employees.sort((a, b) => {

        let aa=a.login, bb=b.login;

		if (aa[field] < bb[field]) return -1;
		if (aa[field] > bb[field]) return 1;
		return 0;
	});

	this.setState({ employees: employees });
};

   render(){ 
       return(
    <table>
        <thead><TableHead 
        handleFieldSort={this.handleContactSort} 
        handleNameSort={this.handleNameSort} 
        handleUsernameSort={this.handleUsernameSort} 
        handleLastNameFilter={this.handleLastNameFilter}
        handleFirstNameFilter={this.handleFirstNameFilter}
        handleUsernameFilter={this.handleUsernameFilter}
        handleEmailFilter={this.handleEmailFilter}
        handlePhoneFilter={this.handlePhoneFilter}
        />
        </thead> 
        <tbody>
            {this.state.employees.map((employee) => 
                <TableDiv 
                key={employee.email} 
                firstName={employee.name.first}
                lastName={employee.name.last} 
                username={employee.login.username} 
                email={employee.email} 
                phone={employee.phone}/>
                )}
        </tbody>
    </table>
    )}
}

export default Table