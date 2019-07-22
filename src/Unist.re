type ast;
type node = {
  .
  [@bs.set] "type": string,
  [@bs.set] "url": string,
  [@bs.set] "title": string,
};

[@bs.module]
external visit: (ast, string, node => option(node)) => node =
  "unist-util-visit";
