import React, { Component } from "react";
class SearchInput extends Component {
  state = {
    input: "",
  };
}
onInputChange = (value) => {
    this.setState ({ input : value }, ()=>{
        this.PaymentResponse.handleSearchValue(this.state.input)
    })
}
render () {
    return (
        <div>
            <input
            type="text"
            placeholder="Search for Last Name"
            value={this.state.input}
            onChange={(e)=> this.onInputChange(e.targetvalue)}/>
        </div>
    )
}
export default SearchInput;