import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './interfaces/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  protected clickedStep: null|string;
  private route = inject(ActivatedRoute);
  post: Post = {} as Post;

  constructor() {
    this.clickedStep = null;
  }

  public ngOnInit(): void {
    console.log(this.route.snapshot.data);
  }

  public getSteps(): any {
    return [
      { label: 'Step 1', active: false, size: 'medium' },
      { label: 'Step 2', active: false, size: 'large' },
      { label: 'Step 3', active: true, size: 'small' },
      { label: 'Step 4', active: false, size: 'medium' },
      { label: 'Step 5', active: false, size: 'small' },
    ];
  }

  public handleStepClick(label: string): any {
    this.clickedStep = label;
  }
}
