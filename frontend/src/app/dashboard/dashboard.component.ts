import { Component, OnInit } from '@angular/core';
import { DataCardComponent } from '../data-card/data-card.component';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  currentSearch: string[] = [];
  currentInputControl = new FormControl('');
  cards: DataCardComponent[] = [];
  fcNames: string[] = ['Barca FC', 'Manchester United', 'Manchester City', 'Real Madrid FC', 'Bayern München FC', 'Dortmund FC', 'Leverkusen FC'];
  filteredFcNames!: Observable<string[]>;
  selectedFcNames: string[] = [];

  constructor() {}
  // Will run after constructor - should let this method do stuffs instead of the constructor
  // Bind the filteredFcNames with currentInputControl - so that content of list changed upon input change
  ngOnInit(): void {
    this.filteredFcNames = this.currentInputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    ); 
  }
  // Filter out already selected names - and also check against the current input
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.fcNames
    .filter(fcName => !this.selectedFcNames.includes(fcName))
    .filter(fcName => fcName.toLowerCase().includes(filterValue));
  }
  // Update selected FC names list
  onAddSelection(event: MatAutocompleteSelectedEvent): void {
    const selectedValue = event.option.value;
    if(!this.selectedFcNames.includes(selectedValue)) {
      this.selectedFcNames.push(selectedValue);
      this.currentInputControl.setValue('');
    }
    console.log('Current selection: ' + this.selectedFcNames);
  }
  // Remove FC name from selected list
  onRemoveSelection(fcName: string): void {
    const index = this.selectedFcNames.indexOf(fcName);
    if(index >= 0) {
      this.selectedFcNames.splice(index, 1);
      // Filter refresh
      this.currentInputControl.setValue(this.currentInputControl.value);
    }
  }
}
