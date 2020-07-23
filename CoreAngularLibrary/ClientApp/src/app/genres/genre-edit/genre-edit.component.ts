import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/api/models';
import { GenresService } from 'src/app/api/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  id?: number;
  isNew: boolean;
  genre: Genre = {};

  constructor(private genresService: GenresService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.isNew = !this.id;
  }

  async ngOnInit() {
    this.genre = !this.isNew
      ? await this.genresService.getGenre(this.id).toPromise()
      : {};
  }

  async save() {
    let action: Promise<any>;
    if (this.isNew) {
      action = this.genresService.createGenre(this.genre).toPromise();
    } else {
      action = this.genresService.updateGenre(this.genre).toPromise();
    }
    await action.then(() => {
      this.router.navigateByUrl('/genres');
    });
  }
}
