import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from '../models/CardData';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss'
})
export class DataCardComponent {
  @Input() data!: CardData;
  @Input() actionButtonText: string = 'VIEW DETAILS';
  @Input() showAction: boolean = true;
  @Output() cardClick = new EventEmitter<CardData>();
  @Output() buttonClick = new EventEmitter<CardData>();

  onCardClick(): void {
    this.cardClick.emit(this.data);
  }

  onButtonClick(event: Event): void {
    event.stopPropagation();
    this.buttonClick.emit(this.data);
  }
}
