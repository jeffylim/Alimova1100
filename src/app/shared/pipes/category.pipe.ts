import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  private readonly categories = ['Мебель', 'Техника', 'Книги', 'Телефоны'];
  transform(value: number): string {
    return this.categories[value];
  }
}
