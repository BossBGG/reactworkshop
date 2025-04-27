export interface Book {
  title: string;
  author: string;
  year: number;
}

export const books: Book[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];

export interface UserData {
  image: string;
  username: string;
  des: string;
  email: string;
  status: boolean;
}

export const user: UserData[] = [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKhO81lwBpTySRIn6KqSSLNbiUA5s99aqWg&s",
    username: "Kittipong Predapirat" ,
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est repellendus architecto magnam iure sed, adipisci assumenda mollitia laborum aspernatur asperiores quas numquam nemo dolores excepturi velit impedit sequi! Cumque facere necessitatibus qui eos vero ea pariatur natus rem minus.",
    email: "65021363@up.ac.th",
    status: true,
  },
]
export interface BlogData {
  id: number;
  title: string;
  detail: string;
  imageUrl: string;
}

export const blogs: BlogData[] = [
  {
    id: 1,
    title: "Exploring the Future of Web Development",
    detail: "Web development is an ever-evolving field, with new technologies and frameworks constantly emerging...",
    imageUrl: "https://thethaiger.com/th/wp-content/uploads/2022/05/73122870_2526422564091811_3771195085065027584_n.jpg",
  },
  {
    id: 2,
    title: "The Power of React in Modern Web Applications",
    detail: "React has become one of the most popular JavaScript libraries for building user interfaces...",
    imageUrl: "https://thethaiger.com/th/wp-content/uploads/2022/05/73122870_2526422564091811_3771195085065027584_n.jpg",
  },
  {
    id: 3,
    title: "Understanding Artificial Intelligence and Its Impact",
    detail: "Artificial Intelligence (AI) is revolutionizing many industries, from healthcare to finance...",
    imageUrl: "https://thethaiger.com/th/wp-content/uploads/2022/05/73122870_2526422564091811_3771195085065027584_n.jpg",
  },
  {
    id: 4,
    title: "Building Responsive Websites with Tailwind CSS",
    detail: "Tailwind CSS has gained significant popularity as a utility-first CSS framework...",
    imageUrl: "https://thethaiger.com/th/wp-content/uploads/2022/05/73122870_2526422564091811_3771195085065027584_n.jpg",
  },
  {
    id: 5,
    title: "Mastering JavaScript ES6 Features",
    detail: "JavaScript ES6 (ECMAScript 2015) introduced several new features that make the language more powerful...",
    imageUrl: "https://thethaiger.com/th/wp-content/uploads/2022/05/73122870_2526422564091811_3771195085065027584_n.jpg",
  },
];