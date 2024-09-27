import { CommonModule } from '@angular/common';
import { Category } from './../models/category';
import { Component} from '@angular/core';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {

  categories : Category[]=[
    {id:1, title:'Cursos de TI',image:'https://storage.googleapis.com/static.meupc.net/wp/1/2022/02/GettyImages-932559358.jpg'},
    {id: 2, title: 'Banco de Dados', image:'https://blog.unp.br/wp-content/uploads/2022/06/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg'},
    {id: 3, title: 'Python', image:'https://wordpress-cms-ead-prod-assets.quero.space/uploads/2017/11/Curso-de-TI-EaD-1.jpg'},
    {id: 4, title: 'Desenvolvimento Web', image:'https://www.napratica.org.br/wp-content/uploads/2023/11/ti.png'},
    {id: 5, title: ' Java', image:'https://matriculas.estacio.br/blog/wp-content/uploads/2019/06/pos-graduacao-em-ti-cursos-ficar-de-olho-estacio.jpg'},
  ]


}
