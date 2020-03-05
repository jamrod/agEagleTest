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