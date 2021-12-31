export interface IQuestion {
  readonly id?: string;
  readonly question: string;
  readonly isAnswer: boolean;
  readonly createdAt: object;
}

export interface IQuestionList {
  [key: string]: IQuestion;
}

export interface IRoom {
  id: string;
  name: string;
  clap: number;
  questions: IQuestionList;
  questionArr: IQuestion[];
  createdBy: string;
  createdAt: object;
}

export interface ICreateRoom {
  name: string;
  createdBy: string | null | undefined;
  createdAt: object;
}

export interface IUser {
  displayName: string;
}
