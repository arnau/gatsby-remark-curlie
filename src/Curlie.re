type t = (string, option(string));

type mapping = {
  prefix: string,
  url: string,
};

module Path = {
  /** https://url.spec.whatwg.org/#path-absolute-url-string */
  let isAbsolute = (path: string): bool => Js.String.get(path, 0) == "/";
};

/** Parses a potential Curlie string.  A curlie must be of the form
 * `{prefix}:{path}`:
 *
 * @example {[
 *   example:foo
 *   example:foo/bar
 *   example:foo/bar:qux
 * ]}
 *
 * A curlie doesn't allow "://", it is the key to discriminate absolute URLs
 * with protocol from the rest.
 *
 * Also, `prefix` is constrained to alphanumeric, dash (`-`), underscore (`_`)
 * and full stop (`.`).
 */
let fromString = (input: string): option(t) => {
  open Js.String;

  let idx = indexOf(":", input);

  if (idx == (-1) || includes("://", input)) {
    None;
  } else {
    let prefix = slice(~from=0, ~to_=idx, input);
    let path = sliceToEnd(~from=idx + 1, input);

    switch (match([%re "/^[a-z][a-z0-9-_.]*$/"], prefix), path) {
    | (None, _) => None
    | (_, "") => Some((prefix, None))
    | _ => Some((prefix, Some(path)))
    };
  };
};

/** Expands a Curlie into a Url based on the given catalogue.
 *
 * Expansion is not smart. It doesn't deal with absolute paths in the right
 * way.
 */
let expand = ((prefix, path), catalogue: list(mapping)): option(string) =>
  switch (List.find(record => record.prefix == prefix, catalogue)) {
  | exception Not_found => None
  | record =>
    switch (path) {
    | None => Some(record.url)
    | Some(path_) => Some(record.url ++ path_)
    }
  };
