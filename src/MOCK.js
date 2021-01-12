const uniqid = require("uniqid");

const listComponentMockArray = [
  {
    id: uniqid(),
    name: "Zac",
    description: "Dashboard styleing",
    time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
    content: "completed general changes and reformed the dashboard styleing",
  },
  {
    id: uniqid(),
    name: "Danial",
    description: "UI research",
    time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
    content: "completed general changes and reformed the dashboard styleing",
  },
  {
    id: uniqid(),
    name: "Sarah",
    description: "Backend database",
    time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
    content: "completed general changes and reformed the dashboard styleing",
  },
  {
    id: uniqid(),
    name: "Danial",
    description: "General",
    time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
    content: "completed general changes and reformed the dashboard styleing",
  },
];

export const dashboardWidgets = [
  {
    id: uniqid(),
    type: "lc",
    title: "Recent Changes",
    items: listComponentMockArray,
  },
  {
    id: uniqid(),
    type: "lc",
    title: "Log Ins",
    items: listComponentMockArray,
  },
  {
    id: uniqid(),
    type: "gr",
    title: "Graph",
  },
];

// =====  PLANNING KANBAN  =====

const todo = [
  { id: uniqid(), title: "test1", content: "One" },
  { id: uniqid(), title: "test2", content: "Two" },
  { id: uniqid(), title: "test3", content: "Three" },
  { id: uniqid(), title: "test4", content: "Four" },
];
const inProgress = [
  { id: uniqid(), title: "test5", content: "Five" },
  { id: uniqid(), title: "test6", content: "Six" },
];
const completed = [
  { id: uniqid(), title: "test7", content: "Nine" },
  { id: uniqid(), title: "test8", content: "Ten" },
];

export const backend = {
  [uniqid()]: {
    name: "Todo",
    items: todo,
  },
  [uniqid()]: {
    name: "In Progress",
    items: inProgress,
  },
  [uniqid()]: {
    name: "Done",
    items: completed,
  },
};
