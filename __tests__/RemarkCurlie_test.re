open Jest;
open Expect;

describe("RemarkCurlie.default", () => {
  open RemarkCurlie;

  let config = [%raw {|
    {"db": [
      {"id": "example", "url": "https://example.org/"}
    ]}
  |}];

  test("baseline", () => {
    let tree = [%raw {|
      {
        "type": "link",
        "url": "example:foo",
      }
    |}];
    let expected = [%raw {|
      {
        "type": "link",
        "url": "https://example.org/foo",
        "title": "[example]"
      }
    |}];

    expect(default(tree, config)) |> toEqual(expected)
  });

  /* test("full catalogue entry", () => { */
  /*   let config = */
  /*     {"db": */
  /*       [| */
  /*         { */
  /*           "id": "example2", */
  /*           "url": "https://example.org/", */
  /*           "title": "Lorem ipsum", */
  /*           "publisher": "Acme", */
  /*           "published": "2018", */
  /*           "authors": [|"A. Siches", "B. East"|] */
  /*         } */
  /*       |] */
  /*   }; */
  /*   let tree = [%raw {| */
  /*     { */
  /*       "type": "link", */
  /*       "url": "example2:foo", */
  /*     } */
  /*   |}]; */
  /*   let expected = [%raw {| */
  /*     { */
  /*       "type": "link", */
  /*       "url": "https://example.org/foo", */
  /*       "title": "[example] Lorem ipsum. 2018. A. Siches, B. East. Acme." */
  /*     } */
  /*   |}]; */

  /*   expect(default(tree, config)) |> toEqual(expected) */
  /* }); */

  test("bad catalogue throws", () => {
    let tree = [%raw {|
      {
        "type": "link",
        "url": "foo:bar",
      }
    |}];

    expect(() => default(tree, config)) |> toThrow
  });

  test("absolute url is untouched", () => {
    let tree = [%raw {|
      {
        "type": "link",
        "url": "https://example.org/foo",
      }
    |}];

    expect(default(tree, config)) |> toEqual(tree)
  });

  test("absolute url is untouched (no protocol)", () => {
    let tree = [%raw {|
      {
        "type": "link",
        "url": "/foo",
      }
    |}];

    expect(default(tree, config)) |> toEqual(tree)
  });

  test("relative url is untouched", () => {
    let tree = [%raw {|
      {
        "type": "link",
        "url": "./foo",
      }
    |}];

    expect(default(tree, config)) |> toEqual(tree)
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

  /*   expect(default(tree, config)) |> toEqual(expected) */
  /* }); */
});
