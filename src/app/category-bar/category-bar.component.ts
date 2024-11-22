import { CommonModule } from '@angular/common';
import { Category } from './../models/category';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from './category.service';
import { error } from 'console';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent implements OnInit {
  categories: any = [];
  constructor(private categoryService: CategoryService){}
ngOnInit(): void {
  this.categoryService.getList().subscribe({
    next:(response: any) => {
      this.categories = response.categories;
    },
    error: (err: any) => {}
  }
)}
  }
