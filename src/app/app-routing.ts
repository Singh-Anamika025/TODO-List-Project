import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./_pages/todo-list.component')
      .then(mod => mod.TodoListComponent)
  },
  {
    path: 'todo-detail',
    loadComponent: () => import('./_pages/todo-detail.component')
      .then(mod => mod.TodoDetailComponent)
  }
];
