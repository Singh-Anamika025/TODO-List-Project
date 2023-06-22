import { Component, ViewChild } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { SearchPipe } from 'src/app/_pipe/search.pipe';
import { User } from 'src/app/_state/users-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [HttpClientModule, MatSelectModule, MatButtonModule, MatInputModule, CommonModule, MatTableModule,
    MatProgressSpinnerModule, MatPaginatorModule, MatCheckboxModule, SearchPipe],
  providers: [HttpClient],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  dataSource: User[] = [];
  columnsToDisplay: string[] = ['action', 'id', 'title', 'completed'];
  expandedElement!: User;
  page: number = 1;
  count: number = 200;
  tableSize: number = 7;

  @ViewChild('pagination') pagination!: MatPaginator;
  constructor(private http: HttpClient, private router: Router) {
   this.dataSource = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('datasource')))) ?? this.getUserData();
  }

  getUserData(start = 0, limit = 5) {
    const url = `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limit}`
    this.http.get<User[]>(url).subscribe(res => {
      this.dataSource = res;
      localStorage.setItem('datasource', JSON.stringify(this.dataSource));
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getUserData();
  }

  change() {
    this.getUserData(this.pagination?.pageIndex, this.pagination?.pageSize);
  }
  navigate(element: User) {
    localStorage.setItem('element', JSON.stringify(element));
    this.router.navigate(['todo-detail'])
  }
}

