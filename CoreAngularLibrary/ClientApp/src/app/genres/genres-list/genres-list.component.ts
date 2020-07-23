import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/api/models';
import { GenresService } from 'src/app/api/services';

@Component({
  selector: 'genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this.genresService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }

  delete(genre: Genre) {
    if (confirm('Удалить жанр?')) {
      this.genresService.deleteGenre(genre.id).subscribe(() => {
        this.loadGenres();
      });
    }
  }
}
