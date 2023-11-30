import { Component } from '@angular/core';
import { Country } from '../models/Country';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  countrys: Country[] = [];

  constructor(private service: PackagesService) {}

  index(): void {
    this.service.index().subscribe((data) => (this.countrys = data));
  }

  ngOnInit() {
    this.index();
  }
}
