import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:""
        }
    }
    onChange = (e) => {
        this.setState({
          value:e.target.value
        })
      }

    
    render() {
        const {onName} = this.props
        const {value} = this.state
        return (
            <div className="form__block">
                <form className="form input-group mb-3" 
                    onSubmit={(e)=>onName(e,value)}
                    >
                    <input 
                        className="form-control"
                        type="text" 
                        value={this.state.value}
                        placeholder="Search City"
                        aria-describedby="button-addon2"
                        onChange={this.onChange}
                    />
                    <button 
                        id="btn-outline-secondary"
                        className="btn btn-outline-secondary" 
                        id="button-addon2">
                            <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
