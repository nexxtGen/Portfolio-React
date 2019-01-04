import React from 'react';
import './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueForm: ''
        };        
    }

    submit(event) {
        this.props.addItemFunc(this.state.valueForm);
        event.preventDefault(); //Zatrzymuje przeładowanie App
    }

    onChangeForm(event) {
        const val = event.currentTarget.value; 
        this.setState({ valueForm: val });
    }

    render() {
        return (
            <div className="form-toDoApp">
                <form onSubmit={this.submit.bind(this)}>
                    <label className="label-toDoApp">
                        <p className="p-toDoApp"><b>Add new Item:</b></p>
                        <input type="text" value={this.state.value} onChange={this.onChangeForm.bind(this)}></input>
                    </label>
                    <input type="submit" value="Add Item"></input>
                </form>
            </div>
        )
    }
};

export default TodoForm;