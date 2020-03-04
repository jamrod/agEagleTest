import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        this.input.focus()
    }

    getInput = str => {
        this.setState(prevState => ({ input: str }));
    }

    submit = () => {
        console.log('submit')
        this.props.apiCall(this.state.input)
        this.setState(prevState => ({ input: '' }));
    }

    keyPressed = (e) => {
        if (e.key === 'Enter') {
            this.submit()
        }
    }

    render() {
        return (
            <div className='input' onKeyDown={(e) => this.keyPressed(e)}>
                <p>Enter the number of points you want to search</p>
                <input type='text' ref={(input) => this.input = input}
                    placeholder='enter a number'
                    value={this.state.input}
                    onChange={e => { this.getInput(e.target.value) }}
                />
                <button className="button" onClick={() => {
                    this.submit()
                }} >Submit</button>
            </div>
        )

    }

}

export default Input