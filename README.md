# Gatsby Remark Curlie

[Gatsby](https://www.gatsbyjs.org/) [Remark](https://remark.js.org/) plugin to
expand Curlies into URLs based on the given catalogue.

## Install

```sh
yarn add gatsby-remark-curlie
```

## How to use

```javascript
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-curlie`,
          options: {
            db: [
              {id: "example", "url": "https://example.org/"},
              {id: "curie", "url": "https://www.w3.org/TR/curie", "publisher": "W3C", "published": "2010"},
              {id: "url", "url": "https://url.spec.whatwg.org/#", "publisher": "WHATWG"},
            ]
          },
        },
      ],
    },
  },
];
```

Then a Markdown document like:

```markdown
An example with a few curlies that expand to [URLs](url:).

The curlie above shows how to use a curlie without path. You can also use any
path that is a valid [relative URL](url:relative-url-string):

* [example:foo](example:foo)
* [example:foo/bar](example:foo/bar)
* [example:foo/bar?q=qux](example:foo/bar?q=qux)

Curlies are fundamentally the same as [CURIEs](curie:) but expanding to
[URLs](url:) instead of URI or IRI.

Also, the prefix is required and must be `[a-z][a-z0-9-_.]*`.
```

Would be tranformed to


```markdown
An example with a few curlies that expand to [URLs](https://url.spec.whatwg.org/#).

The curlie above shows how to use a curlie without path. You can also use any
path that is a valid [relative URL](https://url.spec.whatwg.org/#relative-url-string):

* [example:foo](https://example.org/foo)
* [example:foo/bar](https://example.org/foo/bar)
* [example:foo/bar?q=qux](https://example.org/foo/bar?q=qux)

Curlies are fundamentally the same as [CURIEs](https://www.w3.org/TR/curie)
but expanding to [URLs](https://url.spec.whatwg.org/#) instead of URI or IRI.

Also, the prefix is required and must be `[a-z][a-z0-9-_.]*`.
```


### Options

The `db` option is required. It expects a list of references:

|Key|Required|Description|
|-|-|-|
|`id`|Yes|The identifier used as a curlie prefix|
|`url`|Yes|The base URL|
|`publisher`|No|The publisher. E.g. `"IETF"`|
|`published`|No|The date it was published. E.g. `"2018"`|
|`authors`|No|The list of authors. E.g. `["Arnau Siches"]`|


## License

Arnau Siches under the [MIT License](LICENSE).
