import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TodoListComponent } from './_pages/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
