import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
 //templateUrl: './new.component.html',
 template: `
 <form [formGroup]= "categoryForm" (ngSubmit)="onSubmit()">
  <label for="title">Titulo:&nbsp;</label>
  <input type = "tel" id="title" for>
<br>
  <label for="image">Imagem:&nbsp;</label>
  <input type="text" id= "image">
<br>
<br>
  <button type="submit" class="btn btn-primary">Cadastrar</button>
 </form>
 `,
  styleUrl: './new.component.css'
})
export class NewComponent {
  categoryForm: FormGroup
//FormBuilder
//FormGroup
//FormControl
constructor(private fb:FormBuilder){
  this.categoryForm = this.fb.group({
    title:[],
    image:[],
  });
}

onSubmit(){
  console.log(this.categoryForm.value);
}
}
