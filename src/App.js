import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      clients: [],
      SearchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ clients: users}));
  }

  handleChange = e => {
    /* Any one from the below two lines of code will work fine*/
    //this.setState({SearchField: e.target.value}, () => console.log(this.state.SearchField))
    this.setState({SearchField: e.target.value})
  }

  render() {
    const { clients, SearchField } = this.state;
    const filteredClients = clients.filter(client=>
      client.name.toLowerCase().includes(SearchField.toLocaleLowerCase()));
    /* The above line of code is nth but 
    const clients = this.state.clients;
    const SearchField = this.state.SearchField;
    It just deconstructs the state properties into const.*/
    return (
      <div className="App">      
      <h1>Clients Rolodex</h1>
      <SearchBox placeholderforsearchbox='Search for clients' changeEvent={this.handleChange} />
      <CardList clients={filteredClients} />                     
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Rishi is doing great.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
