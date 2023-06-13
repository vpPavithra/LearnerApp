import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-details-option',
  templateUrl: './chapter-details-option.page.html',
  styleUrls: ['./chapter-details-option.page.scss'],
})
export class ChapterDetailsOptionPage {
  chapterName: string = "";
  selectedContent: any;
  query: any;
  contents: Array<any> = [{type:"Quiz", selected: false}, {type:"Revise", selected: false}, {type:"worksheet", selected: false}, {type:"Important words", selected: false}, {type:"Activites", selected: false}, {type:"Teach", selected: false}]
  constructor(
    private router: Router
  ) { 
    this.query = this.router.getCurrentNavigation()?.extras?.state
    this.chapterName = this.query.chapter
  }

  async navigateToContentDetails() {
    if (this.selectedContent) {
      this.contents.forEach(cont => {
        if(cont.type == this.selectedContent.type) {
          cont.selected = true;
        }
      })
      await this.router.navigate(['content-details'], {queryParams: {query: this.query, content: this.contents}})
    }
  }
}
