import { Router, json } from "express";
import { Article } from "./interfaces/Article";

const articles: Article[] = [
  { id: "a1", name: "Pic à glace", price: 2.99, qty: 123 },
  { id: "a2", name: "Pelle", price: 3, qty: 4 },
  { id: "a3", name: "Marteau", price: 1, qty: 62 },
];

const generateId = (): string => {
  return (Math.random() * 1e16).toFixed(0);
};

const app = Router();

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", json(), (req, res) => {
  const newArticle = req.body;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).end();
});

export const api = app;
