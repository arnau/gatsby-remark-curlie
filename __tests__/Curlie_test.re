open Jest;
open Expect;

describe("Curlie.fromString", () => {
  open Curlie;

  test("full", () =>
    expect(fromString("foo:bar")) |> toEqual(Some(("foo", Some("bar"))))
  );

  test("full single char", () =>
    expect(fromString("foo:b")) |> toEqual(Some(("foo", Some("b"))))
  );

  test("full with /", () =>
    expect(fromString("foo:bar/qux")) |> toEqual(Some(("foo", Some("bar/qux"))))
  );

  test("full with :", () =>
    expect(fromString("foo:bar:qux")) |> toEqual(Some(("foo", Some("bar:qux"))))
  );


  test("full single /", () =>
    expect(fromString("foo:/")) |> toEqual(Some(("foo", Some("/"))))
  );

  test("no path", () =>
    expect(fromString("example:")) |> toEqual(Some(("example", None)))
  );

  test("not curlie", () =>
    expect(fromString("example")) |> toEqual(None)
  );

  test("bad prefix", () =>
    expect(fromString("a/b:bar")) |> toEqual(None)
  );


  test("a URL", () =>
    expect(fromString("https://example.org")) |> toEqual(None)
  );
});

describe("Curlie.expand", () => {
  open Curlie;

  let catalogue = [|
    {
      prefix: "example",
      url: "https://example.org/",
    },
  |];

  test("partial", () =>
    expect(expand(("example", None), catalogue))
    |> toEqual(Some("https://example.org/"))
  );

  test("full", () =>
    expect(expand(("example", Some("bar")), catalogue))
    |> toEqual(Some("https://example.org/bar"))
  );

  test("not found", () =>
    expect(expand(("example2", None), catalogue))
    |> toEqual(None)
  );

});

