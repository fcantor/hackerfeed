import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

console.log(url);

const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };
    // bind method to constructor to make it a class method
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  // fetches data
  componentDidMount() {
    const {
      searchTerm
    } = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  onDismiss(id) {
    const isNotid = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotid);
    // updated state
    this.setState({
      result: Object.assign({}, this.state.result, { hits: updatedHits }),
    });
  }

  onSearchChange(event) {
    // update local state with a search term
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    const {
      searchTerm,
      result
    } = this.state;

    // REMOVE COMMENT WHEN IN WIFI
    if (!result) {
      return null;
    }

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>
          <Table
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => 
    <form>
      {children}
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>

// CSS FOR TABLE COMPONENT
const largeColumn = {
  width: '40%',
}

const midColumn = {
  width: '30%',
}

const smallColumn = {
  width: '10%',
}

const Table = ({list, pattern, onDismiss}) => 
      <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
              <br />
            </span>
            <span style={midColumn}>
              Author: {item.author}
            </span><br />
            <span style={smallColumn}>
              Comments: {item.num_comments}
            </span><br />
            <span style={smallColumn}>
              Points: {item.points}
            </span><br />
            <span style={smallColumn}>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>

class Button extends Component {
  render() {
    const {
      onClick,
      className = '',
      children
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export default App;

