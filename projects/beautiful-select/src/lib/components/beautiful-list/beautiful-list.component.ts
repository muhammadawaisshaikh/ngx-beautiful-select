import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-beautiful-list',
  templateUrl: './beautiful-list.component.html',
  styleUrls: ['./beautiful-list.component.scss']
})
export class BeautifulListComponent implements OnInit {

  @Output() selectCategory = new EventEmitter<any>();
  @Input('data') data: any = [];
  @Input('heading') heading: string = "";

  selectedCategory: any = '';

  somethingWrong: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout((item: any) => {
      this.somethingWrong = true;
    }, 5000);
  }

  categoryClicked(data: any) {
    this.selectedCategory = data;
    this.selectCategory.emit(data);
  }

}
