import { Component, input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-moviecard',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,TitleCasePipe],
  templateUrl: './moviecard.component.html',
  styleUrl: './moviecard.component.scss'
})
export class MoviecardComponent implements OnInit {
  movies = input<any[]>([])

  ngOnInit(): void {
   if(this.movies()){
    console.log(this.movies());
   }
  }
}
