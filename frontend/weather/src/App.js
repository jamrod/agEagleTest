import React, { Component } from 'react';

import './App.css';

import Input from './Components/Input'
import Locale from './Components/Locale'
import Header from './Components/Header';
import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 0
    }
  }

  apiCall = (num) => {
    const url = `http://localhost:4000/${num}`
    console.log("fetching ", url)
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          data: res
        })
      })
      .catch(err => console.log(err))
  }

  //method to change through results pages
  changePage = (bool) => {
    let current = this.state.page
    if (bool) {
      this.setState({
        page: current + 1,
      })
    } else {
      this.setState({
        page: current - 1,
      })
    }
  }

  render() {
    return (
      <div className="App flex-container-column centered">
        <Header></Header>
        <div className="container">
          <p>Get Snapshots of current weather from around the world! <br />This app will return the current weather from random points around the globe. Enter the number of points you want to search and results will display below. Points requested cannot exceed 60.</p>
          <Input apiCall={this.apiCall}></Input>
          <div className="flex-container-row centered">
            {this.state.page >= 1 ? <img src="/icons/arrow-left.svg" alt="left arrow" onClick={() => this.changePage(false)} className="nav" /> : <img src="/icons/arrow-left.svg" alt="left arrow" className="hidden nav" />}
            {this.state.data[0] ? <span>Showing {this.state.page + 1} of {this.state.data.length}</span> : null}
            {this.state.page < this.state.data.length - 1 ? <img src="/icons/arrow-right.svg" alt="right arrow" onClick={() => this.changePage(true)} className="nav" /> : <img src="/icons/arrow-left.svg" alt="left arrow" className="hidden nav" />}
          </div>
          {this.state.data[this.state.page] ? <Locale data={this.state.data[this.state.page]}></Locale> : null}


        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
