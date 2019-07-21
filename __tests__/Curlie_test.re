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
    expect(fromString("foo:bar/qux"))
    |> toEqual(Some(("foo", Some("bar/qux"))))
  );

  test("full with :", () =>
    expect(fromString("foo:bar:qux"))
    |> toEqual(Some(("foo", Some("bar:qux"))))
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
    {prefix: "example", url: "https://example.org/"},
    {prefix: "example2", url: "https://example.org/far/"},
  |];

  test("partial", () =>
    expect(expand(("example", None), catalogue))
    |> toEqual(Some("https://example.org/"))
  );

  test("full", () =>
    expect(expand(("example", Some("bar")), catalogue))
    |> toEqual(Some("https://example.org/bar"))
  );

  test("combine paths", () =>
    expect(expand(("example2", Some("bar/qux")), catalogue))
    |> toEqual(Some("https://example.org/far/bar/qux"))
  );

  test("not found", () =>
    expect(expand(("nothere", None), catalogue)) |> toEqual(None)
  );
});

describe("Curlie.join", () =>
  Curlie.(
    test("baseline", () =>
      expect(join("https://foo.io/qux", "/bar"))
      |> toEqual("https://foo.io/bar")
    )
  )
);
