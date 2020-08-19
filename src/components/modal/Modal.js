import React, { Component } from "react";
import styles from './Modal.module.css'

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("click", this.handleClick);
      }
      componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("click", this.handleClick);
      }
    
      handleKeyDown = (e) => {
        if (e.code === "Escape") {
          this.props.onClose();
        }
      };
      handleClick = (e) => {
        console.log(e.target.nodeName);
        if (e.target.nodeName === "DIV") {
          this.props.onClose();
        }
      };
    

  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img className={styles.ModalImg} src={this.props.modalSrc} alt="" width="500" height="500" />
        </div>
      </div>
    );
  }
}
