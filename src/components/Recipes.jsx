import { Difficulty } from "./Difficulty";
import { IconDiv, List, Card, Info, Img } from "./Recipes.styled";

import img1 from "../images/Smoked-Salmon-Burgers.jpg";
import img2 from "../images/diana-yen-tomato-recipe-lede.webp";
import img3 from "../images/Spicy-Potato-Salad.jpg";
import img4 from "../images/Chicken-Biryani.jpg";

export const Recipes = () => {
  const data = [
    {
      title: "Smoked Salmon Burger",
      time: 20,
      servings: 6,
      calories: 210,
      level: 0,
      img: img1,
    },
    {
      title: "Tomatoes With Creamy Feta",
      time: 15,
      servings: 3,
      calories: 600,
      level: 1,
      img: img2,
    },
    {
      title: "Spicy Potato Salad",
      time: 30,
      servings: 2,
      calories: 320,
      level: 1,
      img: img3,
    },
    {
      title: "Chicken Biryani",
      time: 40,
      servings: 4,
      calories: 700,
      level: 3,
      img: img4,
    },
  ];

  return (
    <>
      <h1>Recipes</h1>
      <List>
        {data.map((item, i) => (
          <Card key={i}>
            <Img src={item.img} alt={item.title} />
            <Info>
              <h2>{item.title}</h2>
              <IconDiv>
                <span>⏱ {item.time} min</span>
                <span>🍽 {item.servings} servings</span>
                <span>🔥 {item.calories} cal</span>
              </IconDiv>
              <Difficulty level={item.level} />
            </Info>
          </Card>
        ))}
      </List>
    </>
  );
};
