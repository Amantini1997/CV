export interface Page {
  name: string;
  color: string;
  cards: Array<Card>;
  background: string;
}
  
export interface Card {
  source: string;
  title: string;
  content: Array<string>;
}