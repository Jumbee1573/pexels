import React, { Component } from "react";

import { FiPlusCircle, FiHeart } from "react-icons/fi";

import Modal from "react-responsive-modal";

import "./PhotoItem.scss";
import ModalInner from "../../containers/ModalInner/ModalInner";

class PhotoItem extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { photographer_url, photographer, original, id } = this.props;
    return (
      <>
        <div className="photos__item">
          <img
            src={original}
            alt={photographer}
            className="photos__item_image"
            onClick={this.onOpenModal}
          />
          <a
            href={photographer_url}
            className="photographer__name"
            target="blank"
          >
            {photographer}
          </a>
          <div className="photographer__info">
            <button className="photographer__info_collection">
              <FiPlusCircle />
            </button>
            <button className="photographer__info_like">
              <FiHeart />
            </button>
          </div>
        </div>

        <Modal open={open} onClose={this.onCloseModal} center={true}>
          <ModalInner
            photographer={photographer}
            original={original}
            id={id}
            photographer_url={photographer_url}
          />
        </Modal>
      </>
    );
  }
}

export default PhotoItem;
