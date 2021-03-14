import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import animation from "../Alert/Alert.module.css";
import css from "./form.module.css";
import Alert from "../Alert/Alert";


class Form extends Component {
  
  state = {
    name: "",
    number: "",

    alert: false,
  };

  
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = { name: name, number: number, id: uuidv4() };

    this.props.users.filter((w) => w.name.toLowerCase() == name.toLowerCase()).length == 0
      ? this.props.addNewContact(contact)
      : this.changeAlert(true);

    this.claerForm();
  };

  changeAlert = (bool) => {
    this.setState({ alert: bool });
  };

  claerForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  // ToDo DOM tree
  render() {
    return (
      <>
        <TransitionGroup className={animation.main}>
          {this.state.alert && (
            <CSSTransition timeout={250} classNames={animation}>
              <Alert change={this.changeAlert} />
            </CSSTransition>
          )}
        </TransitionGroup>
        {/* <Alert change={this.changeAlert} /> */}
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} required autocomplete='off'/>

          <label htmlFor="number">Phone</label>
          <input id="number" name="number" type="tel" value={this.state.number} onChange={this.handleChange} required autocomplete='off'/>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

// ToDo props defoult & props type
Form.defaultProps = {
  users: [{ id: "id-0", name: "your name", number: "your number" }],
};

Form.propTypes = {
  users: PropTypes.array,
};

export default Form;