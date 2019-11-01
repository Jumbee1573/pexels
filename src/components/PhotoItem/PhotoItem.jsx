import React, { Component } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";

import ModalInner from "../../containers/ModalInner/ModalInner";

import { addLike, removeLike } from "../../actions/actionCreator";

import "./PhotoItem.scss";

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

  addPhotoLike = id => {
    const { addLike } = this.props;
    addLike(id);
  };

  removePhotoLike = id => {
    const { removeLike } = this.props;
    removeLike(id);
  };

  render() {
    const { open } = this.state;
    const { photographer_url, photographer, original, id, likes } = this.props;
    console.log(likes);
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
              {likes.likes.indexOf(id) !== -1 ? <FaHeart /> : <FaRegHeart />}
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

export default connect(
  ({ likes }) => ({
    likes
  }),
  { addLike, removeLike }
)(PhotoItem);
