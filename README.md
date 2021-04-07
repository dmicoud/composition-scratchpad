# Composition Scratchpad


* [Introduction](#introduction)
* [Development](#development)
* [Further Reading](#further-reading)


## Introduction
A simple GraphQL scratchpad to experiment with composition using [GraphQL components](https://github.com/ExpediaGroup/graphql-component).

The server application renders an executable schema composed of:
- A Property Component
- A Reviews Component
- A Users Component

As a result of composition, the executable schema provides property and reviews query.
Additionally, it exposes a listing query, extending a property with reviews and reviews with the reviewer user information.

```
query {
  property(id: 1234) {
    id
    name
  }
  reviews(propertyId:1234) {
    propertyId
    stars
    body
  }
  listing(id: 1234) {
    id
    name
    reviews {
      stars
      body
      reviewer {
        name
      }
    }
  }
}
```

## Development

Running the app:
```
$ npm start
```

Building a docker image:
```
$ docker build -t dmicoud/composition-scratchpad .
```

Running a docker container
```
$ docker run -i -p 8080:4000 -d dmicoud/composition-scratchpad
```

Endpoint available at: http://localhost:8080/graphql 