import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), { optional: true }),
        
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ]))
        ]), { optional: true })

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemCount: number = 0;
  goalText: string = '';
  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  constructor() { }

  ngOnInit() {
    this.updateCounter();
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = "";
    this.updateCounter();
  }

  removeItem(index) {
    this.goals.splice(index, 1);
    this.updateCounter();
  }

  private updateCounter() {
    this.itemCount = this.goals.length;
  }

}
