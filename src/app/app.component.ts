import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http.service';
import { MoviecardComponent } from "./components/moviecard/moviecard.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from "./components/header/header.component";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MoviecardComponent, MatFormFieldModule, MatInputModule, MatButtonModule, HeaderComponent,MatIconModule,FormsModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'movieflix';
  httpService = inject(HttpService)
  MovieList = signal([])

  ngOnInit(): void {
  
  }

  searchMovie(event:any){
    let movieName = event.target.value;
    this.httpService.SearchMovies(movieName).subscribe((movies:any)=>{
      if (movies && movies.Search) {
        this.MovieList.set(movies.Search)
      }
    })
  }

  
}
