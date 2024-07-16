import { Component, OnInit, inject } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Question_Multipple_Choice } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css',
})
export class QuizzesComponent implements OnInit {
  private NavigationService = inject(NavigationService);
  navigateTo(props: string) {
    this.NavigationService.navigateTo(props);
  }
  selectedQuestions: Question_Multipple_Choice[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedQuestions =
        navigation.extras.state['selectedQuestions'] || [];
    }
  }
  getLabel(index: number): string {
    return String.fromCharCode(97 + index);
  }
}
