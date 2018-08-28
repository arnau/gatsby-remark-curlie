type bib = {
  .
  "id": string,
  "url": string,
  "title": option(string),
  "publisher": option(string),
  "authors": option(array(string)),
  "published": option(string),
};
type config('a) = {.. "db": array(bib)} as 'a;

let toMapping = (record: bib): Curlie.mapping => {
  prefix: record##id,
  url: record##url,
};

let bibToString = record => {
  let id = record##id;
  let title = record##title;
  let publisher = record##publisher;
  let published = record##published;
  let joinAuthors = (authors: option(array(string))): option(string) =>
    switch (authors) {
    | None => None
    | Some(authors) =>
      if (Js.Array.length(authors) == 0) {
        None;
      } else {
        Some(Js.Array.joinWith(", ", authors));
      }
    };
  let authors = joinAuthors(record##authors);

  [|title, authors, published, publisher|]
  |> Js.Array.reduce(
       (acc, value) =>
         switch (value) {
         | None => acc
         | Some(token) => acc ++ " " ++ token ++ "."
         },
       "[" ++ id ++ "]",
     );
};

let default = (ast: Unist.node, config: config('a)): Unist.node => {
  let db = config##db;
  let mappings = Js.Array.map(toMapping, db);

  let visitor = (node: Unist.node): unit => {
    let href = node##url;
    let curlie = Curlie.fromString(href);

    switch (curlie) {
    | None => ()
    | Some(curlie) =>
      switch (Curlie.expand(curlie, mappings)) {
      | None =>
        Js.Exn.raiseError(
          "Found a curlie " ++ href ++ " without an entry in the catalogue.",
        )
      | Some(url) =>
        let (prefix, _) = curlie;
        let bib =
          Js.Array.find(record => record##id == prefix, db)
          ->Belt.Option.map(bibToString)
          ->Belt.Option.getWithDefault("");

        node##url #= url;
        node##title #= bib;
      }
    };
  };

  Unist.visit(ast, "link", visitor) |> ignore;

  ast;
};
