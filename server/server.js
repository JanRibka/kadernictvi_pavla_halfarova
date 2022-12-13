import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App.tsx";

function renderFullPage(html, css) {}

function handleRender(req, res) {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal server erro");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
}

const app = express();

app.use("^/$", handleRender);

app.use(express.static(path.resolve(__dirname, "..", "build")));

const port = 3051;
app.listen(port, () => {
  console.log(`App launched on ${port}`);
});
