export interface IBook {
  id: string;
  title: string;
  author: Author;
  category: Category;
  pages: Number;
  imgUrl: string;
}

interface Category {
  id: string;
  genre: string;
}

interface Author {
  id: string;
  name: string;
  age: Number;
  mail: string;
}
