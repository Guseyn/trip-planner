# Trip Planner Web App (EHTML + Express.js)

Trip planner is simple web app that allows you to build journeys between two stations. It shows you different variations with their prices, so you can choose the best route for yourself. It also allows you to pick first class options.

# Demo

<img src="https://raw.githubusercontent.com/Guseyn/trip-planner/master/demo.gif?sanitize=true">

# Stack of technologies

Node.js, Express.js, [EHTML](https://github.com/Guseyn/EHTML). Also we are using [Open Transport API](https://v5.db.transport.rest/api.html).

# Why this app is cool (from tech point of view):

This app is built with Express.js and [EHTML](https://github.com/Guseyn/EHTML). As you can see in the code, serving static files is all that Express.js does (`app.js`). 

Nowdays many developers would use React.js framework/library to build a frontend for such app. I decided to use my [own solution]((https://github.com/Guseyn/EHTML)). Why? Simply because I like simplicity. This is really simple application, and we are not doing nothing fancy here. We just are fetching data from some REST endpoints and mapping responses to some html.

Frontend for this app consists of just **one** html page: `static/html/index.html`, where we include script with **EHTML**. Also, we are using one simple function to save stations to memory. And that's it. All the logic, validation for the form and mapping we are doing right in the html.

I don't need to mention that the same solution in frameworks like React would take lot more `js/jsx` files. And I don't need to mention that that solution would look messy and more complex.

# How it works

When you open an index page, you need to wait for stations to be loaded into memory, so you can select them in the form. Then you just need to select `From (station)`, `To (station)` and pick date and time for the departure.

# How to run app locally

```bash
git clone git@github.com:Guseyn/trip-planner.git
cd trip-planner
npm install
npm start
```

And then you can open: [http://localhost:4200](http://localhost:4200).

# Open app remotely

This app is also deployed on Heroku: .
