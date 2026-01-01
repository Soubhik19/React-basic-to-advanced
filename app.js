const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "tag" }, "Hi, I am a child 1 h1 tag"),
    React.createElement(
      "h2",
      { id: "tag" },
      "Hi, I am the tag from child 1 h2"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "tag" }, "Hi, I am h1 tag"),
    React.createElement("h2", { id: "tag" }, "Hi, I am h2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", className: "main-heading" },
  "Hello from React!"
);

const card = React.createElement("div", { className: "card" }, [
  React.createElement("h3", null, "React Basics"),
  React.createElement("p", null, "Learning React with createElement API"),
  React.createElement("button", { onClick: () => alert("Hello!") }, "Click Me"),
]);

root.render(parent);
