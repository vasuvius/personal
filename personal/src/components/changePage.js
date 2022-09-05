import React, { Component } from "react";

export default class ChangePage extends Component {
    render(){
        return (
            <button className={`themedButton ${this.props.disabled ? 'disabledButton' : this.state.type}`}
              type="button"
              onClick={this.state.onClick}
              disabled={this.props.disabled}
            >{this.state.text}
            </button>
          );
    }

}