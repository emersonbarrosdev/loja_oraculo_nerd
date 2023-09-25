import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  curiosities: { title: string, description: string }[] = [
    {
      title: 'Arquitetos Visuais',
      description: 'Imagine que desenvolvedores front-end são como arquitetos visuais da web. Eles projetam e constroem a parte da frente dos sites, aquilo que você vê e interage.',
    },
    {
      title: 'Design Responsivo',
      description: 'Eles garantem que os sites se adaptem automaticamente a diferentes tamanhos de tela, como celulares e computadores, para que tudo fique sempre bem legível e bonito.',
    },
    {
      title: 'Botões e Formulários',
      description: 'Criam botões, formulários e outros elementos interativos que você clica e preenche quando usa um site.',
    },
    {
      title: 'Compatibilidade com Navegadores',
      description: 'Certificam-se de que o site funcione bem em diferentes navegadores, como Chrome, Firefox e Safari.',
    },
    {
      title: 'Linguagens de Programação',
      description: 'Se preocupam muito com a facilidade de uso. Eles querem que você encontre o que precisa no site sem confusão.',
    },
    {
      title: 'Acessibilidade',
      description: 'Usam linguagens como HTML, CSS e JavaScript para construir a estrutura, a aparência e o comportamento dos sites.',
    },
    {
      title: 'Trabalho em Equipe',
      description: 'Muitas vezes, trabalham em equipes com designers e outros desenvolvedores para criar um site completo.',
    },
    {
      title: 'Atenção aos Detalhes',
      description: 'Eles são detalhistas, cuidando de cada pixel e linha de código para garantir que tudo funcione perfeitamente.',
    },
     {
      title: 'Velocidade de Carregamento',
      description: 'Otimizam o site para que ele carregue rapidamente, mesmo em conexões de internet mais lentas.',
    },
    {
      title: 'Atualizações Constantes',
      description: 'A web está sempre mudando, então eles precisam aprender constantemente para ficarem atualizados com as últimas tecnologias.',
    },
    {
      title: 'Segurança',
      description: 'Trabalham para manter os sites seguros, protegendo contra ameaças online.',
    },
    {
      title: 'Testes e Correções',
      description: 'Testam o site várias vezes para encontrar e corrigir problemas antes de você usá-lo.',
    }
  ];

  currentCuriosityIndex: number = 0;
  currentCuriosity: { title: string, description: string };

  ngOnInit(): void {
    this.showRandomCuriosity();
    setInterval(() => this.showRandomCuriosity(), 5000);
  }

  showRandomCuriosity() {
    this.currentCuriosityIndex = Math.floor(Math.random() * this.curiosities.length);
    this.currentCuriosity = this.curiosities[this.currentCuriosityIndex];
  }
}
