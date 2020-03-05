import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    //put cursor in input on page load
    componentDidMount() {
        this.input.focus()
    }

    //get user input and set to state
    getInput = str => {
        this.setState(prevState => ({ input: str }));
    }

    //trigger API call in App
    submit = () => {
        let num = this.state.input
        if (isNaN(num)) {
            this.setState(prevState => ({ input: '' }));
            return
        } else if (num > 60) {
            num = 60
        }
        this.props.apiCall(num)
        this.setState(prevState => ({ input: '' }));
    }

    //trigger API call on enter
    keyPressed = (e) => {
        if (e.key === 'Enter') {
            this.submit()
        }
    }

    render() {
        return (
            <div className='input' onKeyDown={(e) => this.keyPressed(e)}>
                <input type='text' ref={(input) => this.input = input}
                    placeholder='enter a number'
                    value={this.state.input}
                    onChange={e => { this.getInput(e.target.value) }}
                />
                <button className="button" onClick={() => {
                    this.submit()
                }} >Go!</button>
            </div>
        )

    }

}

export default Input