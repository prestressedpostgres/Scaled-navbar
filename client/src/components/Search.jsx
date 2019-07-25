import React from 'react';
import Dropdown from './Dropdown.jsx';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.action.handleSearch(e)}>
                    <input type="text" className="search" placeholder="Find a great place near you" size="45"/>
                </form>
                <span href="#latest" className="navlink">CITY'S BEST</span>
                <span href="#citybest" className="navlink">THE LATEST</span>
                {/* <Dropdown /> */}


                {/* const cityArray = ['Denver', 'Phoenix/Scottsdale', 'Las Vegas', 'Atlanta', 'Austin', 'Baltimore', 'Boston', 'Charleston', 'Charlotte', 'Chicago', 'Cincinnati', 'Cleveland', 'Columbus', 'Dallas', 'Detroit', 'Houston', 'Indianapolis', 'Kansas City', 'Los Angeles', 'Miami', 'Milwaukee', 'Nashville', 'New Orleans', 'New York City', 'Oakland/Berkley', 'Orlando', 'Philadelphia', 'Portland', 'Providence', 'Salt Lake City', 'San Antonio', 'San Diego', 'San Francisco', 'Savannah', 'Seattle', 'St. Louis', 'Washington, DC'];
        const stateArray = ['Colorado', 'Arizona', 'Nevada', 'Georgia', 'Texas', 'Maryland', 'Massachusettes', 'South Carolina', 'North Carolina', 'Illinois', 'Ohio', 'Ohio', 'Ohio', 'Texas', 'Michigan', 'Texas', 'Indiana', 'Missouri', 'California', 'Florida', 'Wisconsin', 'Minnesota', 'Tennesee', 'Louisiana', 'New York', 'California', 'Florida', 'Pittsburg', 'Oregon', 'Rhode Island', 'Utah', 'Texas', 'California', 'California', 'Georgia', 'Washington', 'Missouri', 'District of Columbia'];
    
        const stateCityObj = {
            Colorado: 'Denver',
            Arizona, 'Phoenix/Scottsdale',
            Nevada: 'Las Vegas',
            Georgia: 'Atlanta',
            Texas: 'Austin',
            Maryland: 'Baltimore',
            Massachusettes: 'Boston'
        }; */}

            <div className="dropdown">
                <button className="dropbtn">DENVER <i className="fa">&#xf107;</i>
                {/* <i className="fa fa-angle-down"></i> */}
                </button>
                <div className="dropdown-content">
                    <div href="#" className="dropdown-items">Denver</div>
                    <div href="#" className="dropdown-items">Phoenix/Scottsdale</div>
                    <div href="#" className="dropdown-items">Las Vegas</div>
                    <div href="#" className="dropdown-items">Atlanta</div>
                    <div href="#" className="dropdown-items">Austin</div>
                    <div href="#" className="dropdown-items">Baltimore</div>
                    <div href="#" className="dropdown-items">Boston</div>
                    <div href="#" className="dropdown-items">Charleston</div>
                    <div href="#" className="dropdown-items">Charlotte</div>
                    <div href="#" className="dropdown-items">Chicago</div>
                    <div href="#" className="dropdown-items">Cincinnati</div>
                    <div href="#" className="dropdown-items">Cleveland</div>
                    <div href="#" className="dropdown-items">Columbus</div>
                    <div href="#" className="dropdown-items">Dallas</div>
                    <div href="#" className="dropdown-items">Detroit</div>
                    <div href="#" className="dropdown-items">Houston</div>
                    <div href="#" className="dropdown-items">Indianapolis</div>
                    <div href="#" className="dropdown-items">Kansas City</div>
                    <div href="#" className="dropdown-items">Los Angeles</div>
                    <div href="#" className="dropdown-items">Miami</div>
                    <div href="#" className="dropdown-items">Milwaukee</div>
                    <div href="#" className="dropdown-items">Minneapolis</div>
                    <div href="#" className="dropdown-items">Nashville</div>
                    <div href="#" className="dropdown-items">New Orleans</div>
                    <div href="#" className="dropdown-items">New York City</div>
                    <div href="#" className="dropdown-items">Oakland/Berkely</div>
                    <div href="#" className="dropdown-items">Orlando</div>
                    <div href="#" className="dropdown-items">Philadelphia</div>
                    <div href="#" className="dropdown-items">Portland</div>
                    <div href="#" className="dropdown-items">Providence</div>
                    <div href="#" className="dropdown-items">Salt Lake City</div>
                    <div href="#" className="dropdown-items">San Antonio</div>
                    <div href="#" className="dropdown-items">San Diego</div>
                    <div href="#" className="dropdown-items">San Francisco</div>
                    <div href="#" className="dropdown-items">Savannah</div>
                    <div href="#" className="dropdown-items">Seattle</div>
                    <div href="#" className="dropdown-items">St. Louis</div>
                    <div href="#" className="dropdown-items">Washington, DC</div>
                </div>
            </div>
        );
    }
}





            </div>
        );
        }
}

export default Search;