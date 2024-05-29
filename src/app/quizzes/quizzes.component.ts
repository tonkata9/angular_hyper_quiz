import { Component, inject } from '@angular/core';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css',
})
export class QuizzesComponent {
  private NavigationService = inject(NavigationService);
  navigateTo(props: string) {
    this.NavigationService.navigateTo(props);
  }
}
