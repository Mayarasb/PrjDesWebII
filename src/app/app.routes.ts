import { Routes } from '@angular/router';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesComponent } from './courses/courses.component';
import { NewComponent } from './category-bar/new/new.component';

export const routes: Routes = [
  {path: 'courses', component:CoursesComponent},
  {path:'course-details',component: CoursesDetailsComponent},
  {path: "courses/:id", component: CoursesComponent},
  {path: 'category/new', component: NewComponent},
];

