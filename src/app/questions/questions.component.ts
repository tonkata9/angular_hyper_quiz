import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../navigation.service';
import { Category, Question_Multipple_Choice } from '../question';
import { NgFor } from '@angular/common';
import { Answer } from '../question';
import { NgIf } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

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
    this.istrue = true;
    this.single_answer = true;
    this.showCreateForm = false;
    this.oneAnswer = true;
    this.answers.length = 0;
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
  question_za_rabota: Question_Multipple_Choice[] = [];
  questions: Question_Multipple_Choice[] = [];
  categories = Object.values(Category);
  selected: boolean = false;
  selectedQuestions: Question_Multipple_Choice[] = [];
  //selectedCategory: Category | undefined;
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
    this.istrue = true;
    this.answers.splice(index, 1);
  }

  submitQuestion() {
    //this.vqrno = true;
    if (this.question_za_rabota.length !== 0) {
      this.question_za_rabota.splice(0, 1);
    }
    if (!this.question || !this.selectedCategory) {
      alert('Please provide a question and select a category.');
      return;
    }
    if (this.answers.length === 0) {
      alert('Please provide at least one answer to the question.');
      return;
    }
    const questionId = this.createQuestionId(this.selectedCategory!);
    const newQuestion: Question_Multipple_Choice = {
      id: questionId,
      content: this.question,
      category: this.selectedCategory!,
      answers: [...this.answers],
      isOneAnswer: this.oneAnswer,
    };
    fetch('http://localhost:5000/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    if (this.single_answer === true) {
      this.answers.forEach((answer, index) => {
        answer.isCorrect = index === 0;
      });
    }
    this.question_za_rabota.push(newQuestion);
    this.questions.push(newQuestion);
    this.showCreateForm = false;
    console.log(newQuestion);

    this.answers.length = 0;
    this.istrue = true;
  }
  onSelect(question: Question_Multipple_Choice) {
    this.selected = true;
    question.selected = !question.selected;
    if (question.selected) {
      this.selectedQuestions.push(question);
    } else {
      const index = this.selectedQuestions.indexOf(question);
      if (index > -1) {
        this.selectedQuestions.splice(index, 1);
      }
    }
  }
  createQuiz() {
    this.Navigate.navigateTo('quizzes', {
      state: { selectedQuestions: this.selectedQuestions },
    });
    this.selected = false;
  }
  createQuestionId(category: Category): string {
    return `${uuidv4()}_${category}`;
  }
  // createQuestionId(category: Category): string {
  //   return `${Math.random()}/${category}`;
  // }
}
