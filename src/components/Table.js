import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true
        });
      });
  }

  render() {
    
    const {items, loading} = this.state

    if(!loading) {
return (
<div>Loading...</div>
)
    }
else {
  return (
  <div className="container">
    
{items.map(item => (


<table className="table text-center b-0">
<tbody>
    <tr>
        <td><img src={item.picture.medium} alt={item.name.first} /></td>
        <td>{item.name.first}</td>
        <td>{item.name.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
    </tr>
</tbody>
</table>

))}

    </div>
  )
}
  }
}

export default App;
