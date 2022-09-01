import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: 'Nome da carta',
      cardDescription: 'Descrição',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'comum',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deckCards: [],
      inputFilter: '',
      rareInput: 'todas',
      superTrunfoFilter: false,
      maxPoints: 210,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const NOVENTA = 90;
      const DUZENTOS_DEZ = 210;
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const fields = [cardName, cardDescription, cardImage,
        Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
      const verifyFields = fields.some((i) => i === '' || i < 0 || i > NOVENTA);
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      this.setState({ maxPoints: DUZENTOS_DEZ - soma });
      if (verifyFields || soma > DUZENTOS_DEZ) {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  }

  onSaveButtonClick = () => {
    const deckObj = {
      ...this.state,
    };
    const { cardTrunfo } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prevState) => ({
      deckCards: [...prevState.deckCards, deckObj],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'comum',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  onDeleteCard = ({ target }) => {
    const { id } = target;
    const { deckCards } = this.state;
    if (deckCards[id].cardTrunfo) this.setState({ hasTrunfo: false });
    const cardDelete = deckCards.filter((i, index) => index !== Number(id) && i);
    this.setState({ deckCards: [...cardDelete] });
  }

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
      deckCards,
      inputFilter,
      rareInput,
      superTrunfoFilter,
      maxPoints } = this.state;
    let verifyInputFilter = deckCards;
    if (inputFilter.length && rareInput !== 'todas') {
      const rare = deckCards.filter((i) => i.cardRare === rareInput);
      verifyInputFilter = rare.filter((el) => el.cardName.toLowerCase()
        .includes(inputFilter.toLowerCase()));
    }
    if (inputFilter.length && rareInput === 'todas') {
      verifyInputFilter = deckCards.filter((i) => i.cardName.toLowerCase()
        .includes(inputFilter.toLowerCase()));
    }
    if (!inputFilter.length && rareInput !== 'todas') {
      verifyInputFilter = deckCards.filter((i) => i.cardRare === rareInput);
    }
    if (superTrunfoFilter && hasTrunfo) {
      verifyInputFilter = [deckCards.find((i) => i.cardTrunfo)];
    }
    return (
      <div>
        <header className="super-container">
          <h1>Tryunfo</h1>
        </header>
        <section className="main-container">
          <section className="main-form">
            <h1>Formulário</h1>
            <Form
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              maxPoints={ maxPoints }
            />
          </section>
          <section className="main-preview">
            <h1>Preview</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </section>
        <section className="search-filter">
          <h2 className="filter">Filtro de busca</h2>
          <label htmlFor="nameFilter" className="filter">
            Nome da carta:
            {' '}
            <input
              style={ { padding: '10px' } }
              id="nameFilter"
              type="text"
              onChange={ this.onInputChange }
              name="inputFilter"
              data-testid="name-filter"
              disabled={ superTrunfoFilter }
            />
          </label>
          <label className="filter" htmlFor="selectRare">
            Raridade:
            {' '}
            <select
              className="filter"
              data-testid="rare-filter"
              id="selectRare"
              onChange={ this.onInputChange }
              name="rareInput"
              value={ rareInput }
              disabled={ superTrunfoFilter }
            >
              <option>
                todas
              </option>
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
          </label>
          <label htmlFor="superTrunfoFilter" className="filter">
            {' '}
            Super trunfo:
            <input
              type="checkbox"
              onChange={ this.onInputChange }
              name="superTrunfoFilter"
              checked={ superTrunfoFilter }
              id="superTrunfoFilter"
              data-testid="trunfo-filter"
            />
          </label>
        </section>
        <section className="deck">
          { deckCards.length > 0 && (
            verifyInputFilter.map((i, index) => (
              <div key={ i.cardName } className="deck-card">
                <Card
                  cardName={ i.cardName }
                  cardDescription={ i.cardDescription }
                  cardAttr1={ i.cardAttr1 }
                  cardAttr2={ i.cardAttr2 }
                  cardAttr3={ i.cardAttr3 }
                  cardImage={ i.cardImage }
                  cardRare={ i.cardRare }
                  cardTrunfo={ i.cardTrunfo }
                />
                <button
                  type="button"
                  onClick={ this.onDeleteCard }
                  id={ index }
                  data-testid="delete-button"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </section>
      </div>
    );
  }
}

export default App;
