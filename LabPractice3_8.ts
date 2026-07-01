// 1. Create an Enum BookGenre
enum BookGenre {
  Action = "Action",
  Comedy = "Comedy",
  Drama = "Drama",
  SciFi = "SciFi",
}

// 2. Create an Interface Book
interface Book {
  title: string;
  author: string;
  genre: BookGenre;
}

// 3. Create a Type Alias LibraryInventory
type LibraryInventory = Book[];

// 4. Function to print all Sci-Fi books
function printSciFiBooks(inventory: LibraryInventory): void {
  console.log("Sci-Fi Books:");
  inventory.forEach((book) => {
    if (book.genre === BookGenre.SciFi) {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log("--------------------");
    }
  });
}

// Example usage
const library: LibraryInventory = [
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: BookGenre.SciFi,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    genre: BookGenre.Drama,
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    genre: BookGenre.SciFi,
  },
  {
    title: "The Three Musketeers",
    author: "Alexandre Dumas",
    genre: BookGenre.Action,
  },
];

printSciFiBooks(library);