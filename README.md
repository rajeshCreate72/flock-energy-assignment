## What I built

`/login` - Completely working
`/meters` — working but not returning any data
`/meters/filter-meters` — should work, untested after the 500 fix
`/transformers` — model/controller written, but you hit rate_limited before confirming it runs end-to-end

## How to run

```
npm install
```

Add `.env` file at the source folder, Add below env variables

```
PORTAL_EMAIL=<Provided in the document>
PORTAL_PASSWORD=<Provided in the document>
BASE_URL=<From the api in dashboard>
```
To run the project
```
npm run dev
```

## Sample request

GET `/login`

## Design decisions & trade-offs

- I have used Express+JS becuase I have already have hands-on experience.
- Choose the project architecutre to be controllers, models and routes. Because data flow lets me seperate logic with data flow.

## What I intentionally skipped

- TypeScript — would've added a new language on top of an already unfamiliar domain (portal reverse-engineering, cookie auth)
- Advanced query/index layer, geo-radius search — optional extension, out of core scope

## Assumptions

- Assumtions to fetch all the 403 meters data using while loop. Got hit by rate limiting.
- No database needed — ~400 records fit comfortably in memory; portal is the system of record.

## What I'd improve with more time

- Finish live meters pagination (currently blocked on rate limiting)
- Add retry/backoff for portal rate limits
- Handle 401 session expiry with automatic re-login + retry

## Reflection

[REFLECTION.md](https://github.com/rajeshCreate72/flock-energy-assignment/blob/main/REFLECTION.md)

## PROTOCOL.md

[PROTOCOL.md](https://github.com/rajeshCreate72/flock-energy-assignment/blob/main/PROTOCOL.md)

## [openapi.json](https://github.com/rajeshCreate72/flock-energy-assignment/blob/main/openapi.json)
