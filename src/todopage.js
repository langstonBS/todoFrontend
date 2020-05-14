import React, { Component } from 'react'

export default class todopage extends Component {
    state = {
       todo: [
            {
            id: 1,
            todo: 'wash cow',
            compleet: false
        },
        {
            id: 2,
            todo: 'wash bird',
            compleet: false
        },
        {
            id: 3,
            todo: 'wash plane',
            compleet: false
        },
        {
            id: 4,
            todo: 'wash fatcst',
            compleet: false
        },
        {
            id: 5,
            todo: 'wash idk',
            compleet: true
        },
        {
            id: 6,
            todo: 'just fucking do somthing',
            compleet: false
        },
        ],
        newTodo: ''
    }
    handleChange = (e) => {
        this.setState({ newTodo: e.target.value })
    }
    getClassName = (task) => {
        if (task.complet) return 'complet';
        if (task.incoompleet)  return 'incoompleet';
    }

    handleSubmit = (e) => {
        e.preventDefalt();
    }
    render() {
        console.log(this.state.newTodo)
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input value={this.state.newTodo} onChange={this.handleChange} />
            
                    <button>click</button>
                </form>
                <ul>
                    {
                        this.state.todo.map(task => <li className={task.compleet ? 'complet' : 'incoompleet'} key={Math.random}>
                            {task.todo}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
