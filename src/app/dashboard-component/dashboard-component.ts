import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashService } from '../api/dash-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent implements OnInit {
  products: any[] = [];

  private dashService = inject(DashService);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dashService.getData().subscribe({
      next: (response: any) => {
        // next: (response: any[]) => {   for users api which are not in ***array object*****
        this.products = response.products ?? [];
        // this.products = response;
        // console.log('API RESPONSE:', response);
        console.log('API RESPONSE:', response.products);
      },
      error: (err: any) => {
        console.log('Error while loading data', err);
      },
    });
  }
}
