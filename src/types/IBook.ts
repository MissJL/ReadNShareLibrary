export interface IBook {
  id: string;
  title: string;
  author: Author;
  category: Category;
  pages: number;
  imgUrl: string;
}

interface Category {
  id: string;
  genre: string;
}

interface Author {
  id: string;
  name: string;
  age: number;
  mail: string;
}
