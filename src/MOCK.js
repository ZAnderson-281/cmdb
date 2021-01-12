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
    title: "TESTING",
  },
  {
    id: uniqid(),
    type: "gc",
    title: "TESTING",
  },
];
