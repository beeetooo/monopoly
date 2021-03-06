import Deck from '../monopoly/deck';

describe('Deck', () => {
  let deck;

  const buildCards = () => [1, 2, 3, 4, 5];
  const buildDeck = cards => new Deck(cards);

  beforeEach(() => {
    deck = buildDeck(buildCards());
  });

  it('should have five treasure cards', () => {
    expect(deck.getCards()).to.have.lengthOf(5);
  });

  it('should draw the next card in the deck', () => {
    const card = deck.drawCard();
    expect(card).to.be.equals(5);
    expect(deck.getCards()).to.have.lengthOf(4);
  });

  it('should reshuffle the cards once they have run out', () => {
    deck = buildDeck([1, 2]);
    deck.drawCard();
    deck.drawCard();
    expect(deck.getCards()).to.have.lengthOf(2);
    deck.drawCard();
    expect(deck.getCards()).to.have.lengthOf(1);
  });
});
