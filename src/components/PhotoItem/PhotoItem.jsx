import React, { Component } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";

import ModalInner from "../../containers/ModalInner/ModalInner";

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

  render() {
    const { open } = this.state;
    const {
      photos: {
        photographer_url,
        photographer,
        src: { original },
        id
      },
      addLike,
      removeLike
    } = this.props;
    const likes = JSON.parse(localStorage.getItem("likes"));
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
            {likes.indexOf(id) !== -1 ? (
              <button
                className="photographer__info_like"
                onClick={() => removeLike(id)}
              >
                <FaHeart />
              </button>
            ) : (
              <button
                className="photographer__info_like"
                onClick={() => addLike(id)}
              >
                <FaRegHeart />
              </button>
            )}
          </div>
        </div>

        <Modal open={open} onClose={this.onCloseModal} center={true}>
          <ModalInner
            photographer={photographer}
            original={original}
            id={id}
            photographer_url={photographer_url}
            likes={likes}
            addLike={addLike}
            removeLike={removeLike}
          />
        </Modal>
      </>
    );
  }
}

PhotoItem.propTypes = {
  addLike: PropTypes.func,
  removeLike: PropTypes.func,
  photographer_url: PropTypes.string,
  photographer: PropTypes.string,
  original: PropTypes.string,
  id: PropTypes.number
};

PhotoItem.defaultProps = {
  addLike: () => {},
  removeLike: () => {},
  photographer_url: "",
  photographer: "",
  original: "",
  id: 1
};

export default PhotoItem;
