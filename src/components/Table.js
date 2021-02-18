import React, {Component} from "react";
import API from "../utils/API"

class Table extends Component {

    state = {
        results: []
    };

    componentDidMount() {
        this.searchEmployee();
        console.log("hi");
    };

    searchEmployee = () => {
        API.search().then((res) => this.setState({results: res.results})).catch((err) => console.log(err));
    };

    render() {
        return (
            <table className="table text-center b-0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{this.state.results}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>

        )
    };
}

export default Table;
