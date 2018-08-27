type node = {
  .
  [@bs.set] "type": string,
  [@bs.set] "url": string,
  [@bs.set] "title": string,
};

[@bs.module]
external visit: (node, string, node => unit) => node = "unist-util-visit";
