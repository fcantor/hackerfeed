import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;

console.log(url);

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
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    const {
      hits,
      page
    } = result;

    const oldHits = page !== 0 ? this.state.result.hits:[];
    const updatedHits = [
      ...oldHits,
      ...hits
    ];
    this.setState({ hits: updatedHits, page });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    console.log("NEW URL ", `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  // fetches data
  componentDidMount() {
    const {
      searchTerm
    } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  onDismiss(id) {
    const isNotid = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotid);
    // updated state
    this.setState({
      result: {...this.state.result, hits: updatedHits },
    });
  }

  onSearchSubmit(event) {
    const {
      searchTerm
    } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
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
    const page = (result && result.page) || 0;

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
            onSubmit={this.onSearchSubmit}
          >
            Search      
          </Search>
        </div>
        {
          result ?
          <Table
            list={result.hits}
            onDismiss={this.onDismiss}
          />
          : null
        }
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            More
          </Button>
        </div>
      </div>
    );
  }
}

const Search = ({ value, onChange, onSubmit, children }) => 
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        {children}
      </button>
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

const Table = ({list, onDismiss}) => 
      <div className="table">
        {list.map(item =>
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

