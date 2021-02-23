import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import HomePage from './Homepage';
import Show from './Show';
import axios from 'axios';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: []
    }
  }

  componentDidMount = () => {
    axios.get('https://developer.nps.gov/api/v1/parks?api_key=MmJGltg1XFU6Rua2ya74un1RMpPF8gkpfpH50AlR', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        this.setState({
          parks: response.data.data
        })

      })
  }



  render() {
    // console.log(this.state.parks)

    return (
      <body>
        <div>
          <div className='top' id='header'>
            <Link to='/'>
              <p>National Parks</p>
            </Link>
          </div>
          <Switch>
            < Route exact path='/' render={(routerProps) =>
              <HomePage {...this.state} {...routerProps} />
            }
            ></Route>
            <Route path='/park/:id' render={(routerProps) =>
              <Show {...this.state} {...routerProps} />
            }>

            </Route>
          </Switch>
          <footer className="App-footer">
              <a href="https://www.nps.gov/index.htm" className="linkStyle" style={{ textDecoration: 'none', color: "white" }} >
                <p id="FooterNPS">National Park Service<br/>
                 U.S. Department of the Interior</p>
                <img id="FooterImage" alt="National Park service logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg" />
              </a>
            </footer>
        </div>

      </body>
    );
  }
}

export default App;
