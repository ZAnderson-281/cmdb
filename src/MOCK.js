const uniqid = require("uniqid");

// Mock User Commits
export const userCommitCount = [
  {
    id: uniqid(),
    x: "Richard",
    y: 14,
  },
  {
    id: uniqid(),
    x: "Sarah",
    y: 12,
  },
  {
    id: uniqid(),
    x: "Mitchell",
    y: 9,
  },
  {
    id: uniqid(),
    x: "Rick",
    y: 8,
  },
];

export const trackableData = {
  a: userCommitCount,
};

// Mock User Data
export const currentUserData = {
  id: uniqid(),
  name: "Zac",
  auth: "Admin",
  logins: [],
  commits: 0,
};
// Dashboard List Widget Data

export const listComponentMockArray = [
  // {
  //   id: uniqid(),
  //   name: "Zac",
  //   description: "Dashboard styleing",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
  // {
  //   id: uniqid(),
  //   name: "Danial",
  //   description: "UI research",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
  // {
  //   id: uniqid(),
  //   name: "Sarah",
  //   description: "Backend database",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
  // {
  //   id: uniqid(),
  //   name: "Danial",
  //   description: "General",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
  // {
  //   id: uniqid(),
  //   name: "Danial",
  //   description: "General",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
  // {
  //   id: uniqid(),
  //   name: "Danial",
  //   description: "General",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
  // {
  //   id: uniqid(),
  //   name: "Danial",
  //   description: "General",
  //   time: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
  //   content: "completed general changes and reformed the dashboard styleing",
  // },
];

export const dashboardWidgets = [
  {
    id: uniqid(),
    type: "lc",
    title: "Log Ins",
    items: listComponentMockArray,
  },
  {
    id: uniqid(),
    type: "lc",
    title: "Recent Changes",
    items: listComponentMockArray,
  },
  {
    id: uniqid(),
    type: "gr",
    title: "Commits",
    items: listComponentMockArray,
  },
];

// =====  PLANNING KANBAN  =====

const todo = [
  {
    id: uniqid(),
    title: "test1",
    content: "One",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
  {
    id: uniqid(),
    title: "test2",
    content: "Two",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
  {
    id: uniqid(),
    title: "test3",
    content: "Three",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
  {
    id: uniqid(),
    title: "test4",
    content: "Four",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
];
const inProgress = [
  {
    id: uniqid(),
    title: "test5",
    content: "Five",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
  {
    id: uniqid(),
    title: "test6",
    content: "Six",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
];
const completed = [
  {
    id: uniqid(),
    title: "test7",
    content: "Nine",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
  {
    id: uniqid(),
    title: "test8",
    content: "Ten",
    cardSettings: {
      cardTextColor: "#222",
      cardHeaderColor: "#eaeaea",
    },
  },
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
