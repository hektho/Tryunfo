import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    let cor = '';
    switch (cardRare) {
    case 'comum':
      cor = 'gray';
      break;
    case 'incomum':
      cor = 'green';
      break;
    case 'raro':
      cor = 'blue';
      break;
    case 'épico':
      cor = 'purple';
      break;
    case 'lendário':
      cor = 'orange';
      break;
    default:
      cor = 'brown';
      break;
    }
    console.log();
    return (
      <div>
        <section className="card" style={ { borderColor: cor } }>
          <h2 data-testid="name-card">
            { cardName }
          </h2>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            width="150px"
            style={ { borderColor: cor } }
          />
          <h4 data-testid="description-card">
            { cardDescription }
          </h4>
          <ul>
            <li data-testid="attr1-card">
              Fogo:
              {' '}
              { cardAttr1 }
            </li>
            <li data-testid="attr2-card">
              Força:
              {' '}
              { cardAttr2 }
            </li>
            <li data-testid="attr3-card">
              Magia:
              {' '}
              { cardAttr3 }
            </li>
          </ul>
          <h3 style={ { color: cor } } data-testid="rare-card">
            { cardRare }
          </h3>
          { cardTrunfo && (
            <span
              className="trunfo-card"
              data-testid="trunfo-card"
            >
              {' '}
              Super Trunfo

            </span>) }
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
