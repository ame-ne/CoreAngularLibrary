import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/api/models';
import { AuthorsService } from 'src/app/api/services';

@Component({
  selector: 'authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorsService.getAuthors().subscribe((authors) => {
      this.authors = authors;
    });
  }

  delete(author: Author) {
    if (confirm('Удалить автора?')) {
      this.authorsService.deleteAuthor(author.id).subscribe(() => {
        this.loadAuthors();
      })
    }
  }
}
