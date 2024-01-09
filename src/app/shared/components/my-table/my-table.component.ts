import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {  MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent<T> implements AfterViewInit {

  @Input() dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  @Input() displayedColumns: string[] = [];
  resultLength = this.dataSource.data.length;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
