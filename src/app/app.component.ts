import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,RouterModule, ListPostsComponent, TodoListComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Agence';
}
