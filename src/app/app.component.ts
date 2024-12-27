import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/http.service';
import { MoviecardComponent } from "./components/moviecard/moviecard.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from "./components/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MoviecardComponent, MatFormFieldModule,
    MatInputModule, MatButtonModule, HeaderComponent, MatIconModule,
    FormsModule,
    MoviedetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'movieflix';
  httpService = inject(HttpService)
  MovieList = signal([])
  MovieDetailData = signal<any>({})
  showDetail = signal(false)

  ngOnInit(): void {
  }

  searchMovie(event: any) {
    let movieName = event.target.value;
    this.httpService.SearchMovies(movieName).subscribe((movies: any) => {
      if (movies && movies.Search) {
        this.MovieList.set(movies.Search)
      }
    })
  }

  getMovieDetails(event: any) {
    this.httpService.getMovieDetails(event).subscribe((movie => {
      console.log(movie);
      this.MovieDetailData.set(movie);
      this.showDetail.set(true);
    }))
  }


  sethome(event:boolean) {
    this.showDetail.set(false)
  }

}
