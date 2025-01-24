
please create a google sheet and add this task in it.
if you can't do that.

then give me a script that i will run in any blank g sheet and that should add this values in cell so this plan can be added in google sheet.

function createLearningPlan() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear(); // Clear any existing content

  // Set the headers
  sheet.appendRow(["Week", "Day", "Topic", "Resource", "Practice"]);

  // Week 1
  sheet.appendRow(["Week 1", "Day 1", "Components and JSX", "https://reactjs.org/docs/introducing-jsx.html", "Build a simple 'Hello World' component."]);
  sheet.appendRow(["Week 1", "Day 2", "State and Lifecycle", "https://reactjs.org/docs/state-and-lifecycle.html", "Create a counter component that uses state."]);
  sheet.appendRow(["Week 1", "Day 3", "Handling Events", "https://reactjs.org/docs/handling-events.html", "Implement event handling in your counter app."]);
  sheet.appendRow(["Week 1", "Day 4", "Conditional Rendering", "https://reactjs.org/docs/conditional-rendering.html", "Enhance your counter app with conditional rendering features."]);
  sheet.appendRow(["Week 1", "Day 5", "Lists and Keys", "https://reactjs.org/docs/lists-and-keys.html", "Create a simple todo list component."]);

  // Week 2
  sheet.appendRow(["Week 2", "Day 6", "Forms in React", "https://reactjs.org/docs/forms.html", "Build a form in your todo app to add new tasks."]);
  sheet.appendRow(["Week 2", "Day 7", "Lifting State Up", "https://reactjs.org/docs/lifting-state-up.html", "Refactor your todo app to manage state at a higher level."]);
  sheet.appendRow(["Week 2", "Day 8", "Composition vs Inheritance", "https://reactjs.org/docs/composition-vs-inheritance.html", "Implement a component that uses composition effectively."]);
  sheet.appendRow(["Week 2", "Day 9", "Context API", "https://reactjs.org/docs/context.html", "Use Context API to manage global state in your todo app."]);
  sheet.appendRow(["Week 2", "Day 10", "Error Boundaries", "https://reactjs.org/docs/error-boundaries.html", "Implement error boundaries in your existing projects."]);

  // Week 3
  sheet.appendRow(["Week 3", "Day 11", "React Router", "https://reactrouter.com/", "Add routing to your todo app."]);
  sheet.appendRow(["Week 3", "Day 12", "State Management with Redux", "https://redux.js.org/introduction/getting-started", "Refactor your todo app to use Redux for state management."]);
  sheet.appendRow(["Week 3", "Day 13", "Asynchronous Actions and Middleware (Redux Thunk)", "https://github.com/reduxjs/redux-thunk", "Implement asynchronous actions in your todo app."]);
  sheet.appendRow(["Week 3", "Day 14", "Testing React Components", "https://testing-library.com/docs/react-testing-library/intro/", "Write tests for your todo app."]);
  sheet.appendRow(["Week 3", "Day 15", "TypeScript with React", "https://react-typescript-cheatsheet.netlify.app/", "Convert your todo app to TypeScript."]);

  // Week 4
  sheet.appendRow(["Week 4", "Day 16", "Performance Optimization", "https://reactjs.org/docs/optimizing-performance.html", "Profile and optimize your todo app."]);
  sheet.appendRow(["Week 4", "Day 17", "Server-Side Rendering (SSR) with Next.js", "https://nextjs.org/docs/getting-started", "Create a simple Next.js application."]);
  sheet.appendRow(["Week 4", "Day 18", "Static Site Generation (SSG) with Next.js", "https://nextjs.org/docs/app/building-your-application/data-fetching/get-static-props", "Implement SSG in your Next.js app."]);
  sheet.appendRow(["Week 4", "Day 19", "GraphQL with Apollo Client", "https://www.apollographql.com/docs/react/", "Integrate Apollo Client in your application."]);
  sheet.appendRow(["Week 4", "Day 20", "Building a Full-Stack Application", "https://www.mongodb.com/languages/mern-stack-tutorial", "Start a simple full-stack application (MERN stack)."]);
  sheet.appendRow(["Week 4", "Days 21-22", "Project Completion and Review", "", "Complete your full-stack application, review everything you've learned, and document your process."]);

  // Formatting the header
  var range = sheet.getRange("A1:E1");
  range.setFontWeight("bold");
  range.setBackground("#f0f0f0");
  sheet.autoResizeColumns(1, 5); // Auto-resize columns
}