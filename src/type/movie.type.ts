export enum ResponseBool {
  True = 'True',
  False = 'False',
}

export type Movie = {
  Title: string;
  Year: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Ratings: Array<{ Source: string; Value: string }>;
  imdbRating: string;
  Response: ResponseBool;
};
