import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
import SearchInput from "./components/SearchInput";
import "./App.css";
class App extends Component {
    state = {
      users : [],
      search : ''
    }
    componentDidMount() {
      fetch('https://randomuser.me/api/?results=20&nat=us')
        .then(res => res.json())
        .then(data => this.setState({ users : data.results.sort((a,b) => a.name.last > b.name.last ? 1 : -1) }))
        .catch(err => console.log(err));
    }
    handleSearchValue = (searchValue) => {
        this.setState({ search : searchValue });
      }