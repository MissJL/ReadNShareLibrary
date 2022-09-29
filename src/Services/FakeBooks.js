const books = [
  {
    id: "1",
    title: "Nature Kingdom",
    author: {
      id: "1",
      name: "Clove Griffith",
      age: 44,
      mail: "c.griffith@gmail.com",
    },
    category: { id: "1", genre: "Thriller" },
    pages: 301,
    imgUrl: "images/naturekingdom.jfif",
  },
  {
    id: "2",
    title: "Beyond the shadows",
    author: {
      id: "2",
      name: "Anna Hub",
      age: 32,
      mail: "anna.hub@email.com",
    },
    category: { id: "2", genre: "Horror" },
    pages: 652,
    imgUrl: "images/beyondtheshadows.jpg",
  },
  {
    id: "3",
    title: "The Hobbit",
    author: {
      id: "3",
      name: "J.R.R.Tolkien",
      age: 81,
      mail: "tolkien@mail.com",
    },
    category: { id: "3", genre: "Fantasy" },
    pages: 310,
    imgUrl: "images/thehobbit.png",
  },
  {
    id: "4",
    title: "A Thousand Pieces of You",
    author: {
      id: "4",
      name: "Claudia Gray",
      age: 54,
      mail: "c.gray123@hotmail.com",
    },
    category: { id: "4", genre: "Romance" },
    pages: 552,
    imgUrl: "images/thousandpiecesofyou.jfif",
  },
];

export function getBooks() {
  return books;
}
