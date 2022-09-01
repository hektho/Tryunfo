import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      maxPoints } = this.props;
    return (
      <div>
        <form className="form-container">
          <input
            maxLength="50"
            name="cardName"
            type="text"
            placeholder="Nome da carta"
            value={ cardName }
            className="inputs"
            onChange={ onInputChange }
            data-testid="name-input"
            autoComplete="off"
          />
          <textarea
            maxLength="200"
            name="cardDescription"
            placeholder="Descrição da carta"
            value={ cardDescription }
            className="inputs"
            onChange={ onInputChange }
            data-testid="description-input"
          />
          <label className="label-atribute" htmlFor="fogo">
            Fogo:
            {' '}
            <input
              id="fogo"
              className="atribute"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label className="label-atribute" htmlFor="força">
            Força:
            {' '}
            <input
              id="força"
              className="atribute"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label className="label-atribute" htmlFor="magia">
            Magia:
            {' '}
            <input
              id="magia"
              className="atribute"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <span style={ { fontSize: '14px' } }>
            Pontos disponíveis:
            {' '}
            { maxPoints }
          </span>
          <input
            name="cardImage"
            type="text"
            placeholder="URL da imagem"
            value={ cardImage }
            className="inputs"
            onChange={ onInputChange }
            data-testid="image-input"
            autoComplete="off"
          />
          <select
            name="cardRare"
            value={ cardRare }
            className="inputs select-input"
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>
              comum
            </option>
            <option>
              incomum
            </option>
            <option>
              raro
            </option>
            <option>
              épico
            </option>
            <option>
              lendário
            </option>
          </select>
          { hasTrunfo ? (
            <span style={ { textAlign: 'center' } }>
              Você já tem um Super Trunfo em seu baralho
            </span>
          ) : (
            <label className="inputs" htmlFor="cardTrunfo-check">
              Super trunfo:
              <input
                id="cardTrunfo-check"
                name="cardTrunfo"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
              />
            </label>
          )}
          <button
            type="button"
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            style={ isSaveButtonDisabled
              ? { color: 'gray', borderColor: 'gray' }
              : { color: 'brown', borderColor: 'brown' } }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  maxPoints: PropTypes.number.isRequired,
};
