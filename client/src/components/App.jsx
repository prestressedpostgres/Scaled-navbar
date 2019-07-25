// Main app file
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import PhotoBar from './PhotoBar.jsx';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: '',
        dropdownIsHidden: true
      };
      // this.handleSearch = this.handleSearch.bind(this); // bind handleSearch function to App component
    }

componentDidMount() {
  axios.get('/')
  .then(function(response) {
    //console.log(response);
    // this.setState...not needed
  })
  .catch(function(error) {
  });
}

toggleDropdown() {
  this.setState({
    dropdownIsHidden: !this.state.dropdownIsHidden
  });
}

handleDropdownClick () {
  this.toggleDropdown();
}

// handleSearch(dataFromSearch) { // should display what the user entered into the search bar
//   this.setState({
//     search: dataFromSearch
//   }), () => { console.log(`This is what you entered: ${this.state.search}`); }
// }

    render() {
        return (
          <div>
            <div className="navwrapper">
              <Navbar action={this.handleSearch} isHidden={this.state.dropdownIsHidden} clickHandler={this.handleDropdownClick.bind(this)}/>
            </div>
            <div>
              <PhotoBar />
            </div>
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('nav'));

export default App;