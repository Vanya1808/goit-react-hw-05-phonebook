import React, { Component } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import css from "./Contacts.module.css";
import animation from "./animation.module.css";


import close from "../../Image/close.png";

class Contact extends Component {
  n
  handlefilter = (prop) => {
    const { filter, contacts } = prop;

    if (filter == "") {
      return contacts;
    } else {
      return contacts.filter((w) =>
        w.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  };

  handleDelete = (event) => {
    this.props.deleteContact(event.target.parentNode.id);
  };

 
  render() {
    return (
      <TransitionGroup className={css.contactList}>
        {this.handlefilter(this.props.users).map((item) => {
          const { id, name, number } = item;
          return (
            <CSSTransition key={id} timeout={250} classNames={animation}>
              <li id={id}>
                <span>
                  {name}: {number}
                </span>

                <button id={id} onClick={this.handleDelete}>
                  {" "}
                  <img src={close} alt="Delete"></img>{" "}
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}


Contact.defaultProps = {
  users: [{ id: "id-0", name: "your name", number: "your number" }],
  filter: "",
};

Contact.propTypes = {
  users: PropTypes.object,
};

export default Contact;