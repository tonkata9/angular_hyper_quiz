export interface Question_Multipple_Choice {
  id: string;
  content: string;
  category: Category;
  answers: Answer[];
  isOneAnswer: boolean;
  selected?: boolean;
}
export interface Answer {
  text: string;
  isCorrect: boolean;
}

export enum Category {
  GeneralKnowledge = 'General Knowledge',
  ScienceAndNature = 'Science and Nature',
  History = 'History',
  Sports = 'Sports',
  Entertainment = 'Entertainment',
  Literature = 'Literature',
  TechnologyAndComputers = 'Technology and Computers',
  Geography = 'Geography',
}
