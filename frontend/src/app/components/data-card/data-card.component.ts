import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataCard } from '../../models/DataCard';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss'
})
export class DataCardComponent {
  @Input() data!: DataCard;
  @Input() actionButtonText: string = 'VIEW DETAILS';
  @Input() showAction: boolean = true;
  @Output() cardClick = new EventEmitter<DataCard>();
  @Output() buttonClick = new EventEmitter<DataCard>();

  onCardClick(): void {
    this.cardClick.emit(this.data);
  }

  onButtonClick(event: Event): void {
    event.stopPropagation();
    this.buttonClick.emit(this.data);
  }
}
