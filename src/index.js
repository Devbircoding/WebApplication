import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import BasicExample from "./Test";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navigation/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bulb from "./components/bulb/Bulb";
import Counter from "./components/counter/Counter";
import Details from "./components/details/Details";
import WallpaperChanger from "./components/wallpaperchanger/Wallpaperchanger";

const mockResponse = [
  {
    title: "Bulb",
    desc: "The Bulb project is my first project in this unit. It has a slider and buttons to get the bulb on or off. The link to it is below. We explored how to utilize buttons and sliders in this project.",
    img: "/images/testbulb.gif",
    link: "/bulb",
  },
  {
    title: "Counter",
    desc: "The Counter project is a project to make a counter that increments on itself by using the useState hook from react.",
    img: "/images/counter.webp",
    link: "/counter",
  },
  {
    title: "Wallpaper Changer",
    desc: "A project to expand on the usage of the useState hook",
    img: "https://i.redd.it/wedn8ifzabx31.jpg",
    link: "/counter",
  },
  // {
  //   title: "Calculator",
  //   desc: "The Calculator project is a project to recreate an iOS calculator in HTML.",
  //   img: "/images/calc.png",
  // },
  // {
  //   title: "Search",
  //   desc: "The Search project is a project in which you can search through a list of bookmarks to find one. It was done to practice how to do the search functionality and to utilize it for future projects.",
  //   img: "/images/Search.png",
  // },
  // {
  //   title: "Hobbies",
  //   desc: "The Hobbies project is a project in which I experiment with different ways of letting the users pick settings, styles, and many more. It explored functions and user access in more detail than ever.",
  //   img: "/images/large_hobbies and interests in resume.png",
  // },
  // {
  //   title: "Star Wars Image Generator",
  //   desc: "The Star Wars Image Generator was a project with simple UI to experiment with dropdowns as part of a new type of project. As one of my first projects, it is simple but does its job really well.",
  //   img: "/images/SW.png",
  // },
  // {
  //   title: "Times Tables Finder",
  //   desc: "The Times Tables Finder is a project that was a segue into more expansive ways of using mathematical equations to help further projects get better and easier results in a short amount of time.",
  //   img: "/images/2x3.png",
  // },
  // {
  //   title: "To Do List",
  //   desc: "The To-Do List Project was a project in which I explored how to make user-added content integrate into the webpage so that they can use the webpage with infinite possibilities, rather than being limited.",
  //   img: "/images/todo.jpg",
  // },
];

const routerConfig = createBrowserRouter([
  {
    path: "/projects",
    element: (
      <div className="flex-container-vertical">
        {mockResponse.map((item, index) => (
          <BasicExample
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    ),
  },
  {
    path: "/bulb",
    element: <Bulb />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/",
    element: <Details />,
  },
  { path: "/calculator", element: <div>This is my Calculator Page</div> },
  {
    path: "/wallpaperchanger",
    element: <WallpaperChanger />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
