import React, {Component} from "react";
import API from "../utils/API"

class Table extends Component {

    state = {
        employeeData: [],
        search: "",
    };

    componentDidMount() {
        API.getEmployees()
        .then((res) => 
        this.setState({
            employees: res.data.results,
        })
    ).catch((err) =>console.log(err));
    };

    searchEmployee = () => {
        API.search().then((res) => this.setState({results: res.results})).catch((err) => console.log(err));
    };

    render() {
        return (
            <table className="table text-center b-0">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.results}</td>
                        <td>{this.state.results}</td>
                        <td>{this.state.results}</td>
                        <td>{this.state.results}</td>
                    </tr>
                </tbody>
            </table>

        )
    };
}

export default Table;
