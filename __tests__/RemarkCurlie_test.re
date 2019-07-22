open Jest;
open Expect;

describe("RemarkCurlie.plugin", () => {
  open RemarkCurlie;

  let config = [%raw
    {|
    {"db": [
      {"id": "example", "url": "https://example.org/"}
    ]}
  |}
  ];

  test("baseline", () => {
    let tree = [%raw
      {|
      {
        "markdownAST": {
          "type": "link",
          "url": "example:foo",
        }
      }
    |}
    ];
    let expected = [%raw
      {|
      {
        "markdownAST": {
          "type": "link",
          "url": "https://example.org/foo",
          "title": "[example]"
        }
      }
    |}
    ];

    expect(plugin(tree, config)) |> toEqual(expected);
  });

  test("full catalogue entry", () => {
    let config = [%raw
      {|
      {"db": [{
          "id": "example2",
          "url": "https://example.org/",
          "title": "Lorem ipsum",
          "publisher": "Acme",
          "published": "2018",
          "authors": ["A. Siches", "B. East"],
        }]
      }
      |}
    ];

    let tree = [%raw
      {|
      {
        "markdownAST": {
           "type": "link",
           "url": "example2:foo",
        }
       }
     |}
    ];
    let expected = [%raw
      {|
       {
        "markdownAST": {
           "type": "link",
           "url": "https://example.org/foo",
           "title": "[example2] Lorem ipsum. A. Siches, B. East. 2018. Acme."
         }
       }
     |}
    ];

    expect(plugin(tree, config)) |> toEqual(expected);
  });

  test("bad catalogue throws", () => {
    let tree = [%raw
      {|
      {
        "markdownAST": {
        "type": "link",
        "url": "foo:bar",
      }
      }
    |}
    ];

    expect(() =>
      plugin(tree, config)
    ) |> toThrow;
  });

  test("absolute url is untouched", () => {
    let tree = [%raw
      {|
      {
        "markdownAST": {
        "type": "link",
        "url": "https://example.org/foo",
      }
      }
    |}
    ];

    expect(plugin(tree, config)) |> toEqual(tree);
  });

  test("absolute url is untouched (no protocol)", () => {
    let tree = [%raw
      {|
      {
        "markdownAST": {
        "type": "link",
        "url": "/foo",
      }
      }
    |}
    ];

    expect(plugin(tree, config)) |> toEqual(tree);
  });

  test("relative url is untouched", () => {
    let tree = [%raw
      {|
      {
        "markdownAST": {
        "type": "link",
        "url": "./foo",
      }
      }
    |}
    ];

    expect(plugin(tree, config)) |> toEqual(tree);
  });
  /* Jest chokes with this test */
  /* test("ast", () => { */
  /*   let tree = [%raw {| */
       /*     { */
       /*       "type": "root", */
       /*       "children": [ */
       /*         { */
       /*           "type": "link", */
       /*           "url": "example:foo", */
       /*         } */
       /*       ] */
       /*     } */
       /*   |}]; */
  /*   let expected = [%raw {| */
       /*     { */
       /*       "type": "root", */
       /*       "children": [ */
       /*         { */
       /*           "type": "link", */
       /*           "url": "https://example.org/foo", */
       /*         } */
       /*       ] */
       /*     } */
       /*   |}]; */
  /*   expect(plugin(tree, config)) |> toEqual(expected) */
  /* }); */
});
