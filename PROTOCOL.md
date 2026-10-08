## Authentication
- POST /login
- I have added login service. where I have used the base url from the network tab. and enpoint route to call the request.
- Got 403 errors while submitting the password and email provided in the document. So, I have asked Claude about the errors.
- Claude pointed out clearly the errors is from headers (origin, referer) not getting included in fetch.
- Checked the headers in network tab found out they are same as base url. Used base url for sending headers. Login worked.


## GET meters
- Added fetch all the meters data, 403 objects of data of meters. Using while loop. Got hit by rate limiter - Working but not returning any data.

## GET transformers
- Added fetch all 40 transformers. Haven't tested the route. I had a blocker with rate limiter. So, stopped there.