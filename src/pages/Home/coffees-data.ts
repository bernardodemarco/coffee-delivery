import { CoffeeCardProps } from './components/CoffeeCard'

export interface Coffee extends CoffeeCardProps {
  id: number
}

export const coffees: Coffee[] = [
  {
    id: 1,
    imageSource: 'coffee-images/expresso-tradicional.png',
    labels: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    imageSource: 'coffee-images/expresso-americano.png',
    labels: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    imageSource: 'coffee-images/expresso-cremoso.png',
    labels: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    imageSource: 'coffee-images/expresso-gelado.png',
    labels: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    imageSource: 'coffee-images/cafe-com-leite.png',
    labels: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    imageSource: 'coffee-images/latte.png',
    labels: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    imageSource: 'coffee-images/capuccino.png',
    labels: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imageSource: 'coffee-images/macchiato.png',
    labels: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imageSource: 'coffee-images/mocaccino.png',
    labels: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    imageSource: 'coffee-images/chocolate-quente.png',
    labels: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    imageSource: 'coffee-images/cubano.png',
    labels: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    imageSource: 'coffee-images/havaiano.png',
    labels: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    imageSource: 'coffee-images/arabe.png',
    labels: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    imageSource: 'coffee-images/irlandes.png',
    labels: ['especial', 'alcoólico'],
    title: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
