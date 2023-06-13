"use client";

import Todo from "./components/Todo";
import { Box } from "@mui/material";
const mockData = [
  {
    id: 1,
    title: "First Task",
    task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi doloribus molestiae facilis omnis .",
  },
  {
    id: 2,
    title: "Second Task",
    task: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi doloribus molestiae facilis omnis quo, vel necessitatibus necessitatibus.",
  },
];
export default function Home() {
  return (
    <Box sx={{ pl: 2, pr: 5 }}>
      {mockData.map((todo, index) => (
        <Todo title={todo.title} task={todo.task} key={todo.id} />
      ))}
    </Box>
  );
}
