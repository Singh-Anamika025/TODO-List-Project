import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../_state/users-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatButtonModule, MatInputModule],
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {

  element = {
    'userId': '',
    'id': 0,
    'title': 'string',
    'completed': ''
  };
  constructor(private router: Router) {
    this.element = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('element'))));
  }

  onSubmit() {
    let res: User[] = [];
    res = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('datasource'))));
    for(let i=0;i<res.length; i++){
      if(res[i].id == this.element.id){
       res[i] = this.element;
      }
    }
    localStorage.setItem('datasource', JSON.stringify(res));
    this.router.navigate(['']);
  }
  delete(){
    let res: User[] = [];
    res = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('datasource'))));
    for(let i=0;i<res.length; i++){
      if(res[i].id == this.element.id){
       delete res[i]
      }
    }
   res = res.filter(obj => obj);
    localStorage.setItem('datasource', JSON.stringify(res));
    this.router.navigate(['']);
  }
}
