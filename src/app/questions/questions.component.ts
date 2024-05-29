import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../navigation.service';
import { Category, Question_Multipple_Choice } from '../question';
import { NgFor } from '@angular/common';
import { Answer } from '../question';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, FormsModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
  private Navigate = inject(NavigationService);
  navigateTo(props: string) {
    this.Navigate.navigateTo(props);
  }

  showCreateForm = false;
  createQuestionOne() {
    this.single_answer = true;
    this.showCreateForm = false;
    this.oneAnswer = true;
  }
  createQuestion() {
    this.oneAnswer = false;
    this.showCreateForm = true;
    this.question = '';
    this.selectedCategory = undefined;
    this.answers = [];
    this.single_answer = false;
  }
  updateAnswerLength() {
    this.lengthofAnswers = this.answers.length;
  }
  istrue: boolean = true;
  oneAnswer: boolean = false;
  question: string = '';
  single_answer: boolean = false;
  selectedCategory: Category | undefined;
  answers: Answer[] = [];
  lengthofAnswers = this.answers.length;
  questions: Question_Multipple_Choice[] = [];
  categories = Object.values(Category);
  // vqrno = false;
  addAnswer() {
    this.answers.push({ text: '', isCorrect: false });
    this.updateAnswerLength();
    this.istrue = false;
  }
  getLabel(index: number): string {
    return String.fromCharCode(97 + index);
  }
  removeAnswer(index: number) {
    this.answers.splice(index, 1);
  }

  submitQuestion() {
    //this.vqrno = true;
    const newQuestion: Question_Multipple_Choice = {
      id: this.createQuestionId(this.selectedCategory!),
      content: this.question,
      category: this.selectedCategory!,
      answers: [...this.answers],
      isOneAnswer: this.oneAnswer,
    };
    if (this.single_answer === true) {
      this.answers.forEach((answer, index) => {
        answer.isCorrect = index === 0;
      });
    }
    this.questions.push(newQuestion);
    this.showCreateForm = false;
    console.log(newQuestion);
    console.log(this.lengthofAnswers);
    this.answers.length = 0;
    this.istrue = true;
  }

  createQuestionId(category: Category): string {
    return `${Math.random()}/${category}`;
  }
}
