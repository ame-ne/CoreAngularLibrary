import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/api/models';
import { AuthorsService } from 'src/app/api/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  id?: number;
  isNew: boolean;
  author: Author = {};

  constructor(private authorsService: AuthorsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
    this.isNew = !this.id;
  }

  async ngOnInit() {
    this.author = !this.isNew
      ? await this.authorsService.getAuthor(this.id).toPromise()
      : {};
  }

  async save() {
    let action: Promise<any>;
    if (this.isNew) {
      action = this.authorsService.createAuthor(this.author).toPromise();
    } else {
      action = this.authorsService.updateAuthor(this.author).toPromise();
    }
    await action.then(() => {
      this.router.navigateByUrl('/authors');
    });
  }
}
