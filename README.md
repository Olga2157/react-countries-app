## Countries App

![Countries App](https://github.com/Olga2157/react-countries-app/blob/main/src/images/countriesApp.png?raw=true "Countries App Website")

### Project description

Countries App is a React frontend that communicates with a
NodeJS backend running Express.

The main idea of the project is to provide users with the opportunity to explore countries that they like.

The goal is to create a frontend user interface that allows
users to input any given country as a string and then have information about this country rendered back to the user. The information about the country will be fetched via NodeJS
backend which will send requests to the REST Countries API. The information received from this API then is sending back to the React frontend using Express as a GET request response.

Process the information received from the NodeJS backend and render this information back to the user in a way that it can be easily ingested & understood by any person.

**Functionality** 
* The React frontend application that allows the user to input a country as a string.
* Once a string is entered, this frontend application should make requests to the backend NodeJS server to fetch information regarding this country.
* The NodeJS backend server running Express that retrieves the information for the country from Rest Countries API and sends it back to the frontend for rendering.

### Language: 
**TypeScript**

### Technologies & Tools:

*  React (FC & React hooks e.g. useState)
*  NodeJS
*  Express
*  Webpack
*  SCSS, Reactstrap, Bootstrap, React Bootstrap Icons, Classnames 
* Swagger
* Testing of applications with Cypress for frontend & Jest for backend
* Deployment at Heroku

Browser support: Google Chrome.

### Features

* Responsive design
* High-quality icons from React Bootstrap Icons
* Error handling (Error Boundary)
* Swagger
![Countries App](https://github.com/Olga2157/react-countries-app/blob/main/src/images/swagger.png?raw=true "Countries App in swagger")

### Installation

**Set up**

**For run with remote api(backend on heroku):**
1. ``git clone https://github.com/Olga2157/react-countries-app.git``
2. ``cd react-countries-app``
3. ``npm install``
4. ``npm run build``
5. ``npm run start``

**For run with local backend:**
1. ``git clone https://github.com/Olga2157/countries-api.git``
2. ``cd countries-api``
3. ``npm install``
4. ``npm run build``
5. ``npm run start``
6. ``git clone https://github.com/Olga2157/react-countries-app.git``
7. ``cd react-countries-app``
8. Change variable backendUrl to http://localhost:8888/countries/ at ``src/components/HomePage.tsx``
9. ``npm install``
10. ``npm run build``
11. ``npm run start``

Application will be available on http://localhost:3000/

**Run tests:**
* frontend - ``npm run cy:open:ct``
* backend -  ``npm run test``

### Swagger

Visit https://countries-api-olga2157-fec11481ae88.herokuapp.com/swagger

### Schema
![Country Data Schema](https://github.com/Olga2157/react-countries-app/blob/main/src/images/schema.png?raw=true "Country Schema")

### Customer experience

1. Input a country as a string.
2. Click on "Get info" button.
3. Explore countries details or, in the case "not found", repeat the steps 1 & 2.
4. For connection with author click on suitable social network (GitHub or LinkedIn icons)

**Search Example with the information for the country from Rest Countries API**
![Countries App](https://github.com/Olga2157/react-countries-app/blob/main/src/images/countrySearchExample.png?raw=true "Countries App Website")

**Useful links:**
[Rest Countries](https://restcountries.com/#rest-countries) 
[React Countries App](https://github.com/Olga2157/react-countries-app)
[NodeJS backend running Express](https://github.com/Olga2157/countries-api)

**Demo**:
[React Countries App](https://react-countries-app-3e81c0af384f.herokuapp.com/)

[Countries Backend](https://countries-api-olga2157-fec11481ae88.herokuapp.com/)

### Keywords
TypeScript, ts, React, Reactstrap, NodeJS, Express, Jest, Cypress, Heroku
