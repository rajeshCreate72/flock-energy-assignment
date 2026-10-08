## Assumptions
- Logged into portal. Figured there is a search and exporting data.
- Haven't got any clue that what to do in the portal, My Initail thought that I need to build api for `Ops Desk`.
- Shared the screenshots and exported `.json` data to Claude, along with document shared for assignment.
- At first I thought it was CRUD application.
- Claude told me that it is a reverse-engineering/integration problem. And told me to look for api.
- I have checked all the api enpoints. Thought that meters has `403` objects avilable. But no filter. Search is there only for serial number and meter number.
- So, decided to add the filter api.

## Difficult part
- Was to handle the architecture of the app, which was perviously not was never build. 
- I have experince in building Node.js/Express.js application for REST APIs. And I use controllers, models, routes.
- So, I have given the idea of creating this architechture to Claude.
- Claude got me data source of truth. For models, need to use the api to fetch the data. And from there we pass up to routes and finally index.js
- But how do I login. Needed to login. At first I assumed that I need to login using browser and paste the `Cookie` for the routes testing in postman.
- Claude pointed it out that is not the optimal way. And told me a way to login using `/login` enpoint.
- The another difficult part was login enpoint to run. I have got 404 errors for the endpoint. 
- While testing the login enpoint, I have started the server without installing nodemon. But that server is running in background. So, the port I have setup for the server is running in the background.
- Claude pointed out that error, while I am struggling with 404. And used `pkill <service>` and restarted the `nodemon` server. It worked.
- After that I got response but not the cookie for making the api calls for other endpoints in the dashboard.
- Claude corrected the headers (origin, referer) are missing in the headers. So, After adding those headers, Login Worked.

## Improvements
- I would improve the enpoints for filters.
- I would use axios, for better debugging.

## Mistakes
- My assumption of architecture and problem statements.

## Self-criticism
- The enpoints are not upto mark. And intentions were not fully achieved.
- Used Claude for more than explanations.