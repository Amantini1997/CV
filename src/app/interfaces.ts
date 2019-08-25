export interface Page {
    name: string;
    colour: string;
    cards: Array<Card>;
  }
  
export interface Card {
    source: string;
    title: string;
    content: Array<string>;
  }