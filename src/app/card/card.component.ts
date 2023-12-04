import { Component, OnInit } from '@angular/core';
import { Country } from '../models/Country';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  originalCountrys: Country[] = [];
  countrys: Country[] = [];

  constructor(private service: PackagesService) {}

  ngOnInit(): void {
    this.index();
  }

  index(): void {
    this.service.index().subscribe((data) => {
      this.originalCountrys = [...data];
      this.countrys = [...data];
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim().toLowerCase();
    if (!value) {
      // Se o valor de pesquisa for vazio, restaure para o estado original
      this.countrys = [...this.originalCountrys];
    } else {
      // Caso contrário, aplique o filtro na cópia original
      this.countrys = this.originalCountrys.filter((c) => {
        return c.description.toLowerCase().includes(value);
      });
    }
  }
}

