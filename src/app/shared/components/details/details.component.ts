import { CommonModule,Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {


  id!: string;
  rowData: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;

      this.rowData = history.state.rowData;

    console.log('ID from URL:', this.id);
    console.log('Row Data:', this.rowData);
  }

  goBack() {
    this.location.back();
  }

}
