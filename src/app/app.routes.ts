import { Routes, provideRouter } from '@angular/router';
import path from 'path';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { PersonalComponent } from './personal/personal.component';
import { QuestionsComponent } from './questions/questions.component';
export const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'quiz-results', component: QuizResultsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'categories', component: QuestionsComponent },
];
export const appRoutingProviders = [provideRouter(routes)];
