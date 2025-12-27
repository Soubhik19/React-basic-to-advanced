//  const heading = React.createElement("h1",{id:"heading"},"Hello from my first React Code")

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "tag" }, "hi i am a child 1 h1 tag"),
    React.createElement("h2", { id: "tag" }, "hi i am the tag from child 1 h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "tag" }, "hi i am h1 tag"),
    React.createElement("h2", { id: "tag" }, "hi i am h2"),
  ]),
]);
root.render(parent);
