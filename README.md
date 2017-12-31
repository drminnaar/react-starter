# React Starter

A basic template that consists of the essential elements that are required to start building a React application.

The template consists of:

* a typcial project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration
* the main React components to get started

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage

---

## Related Projects

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

  ```bash
  node -v
  npm -v
  ```

### Install

Follow the following steps to get development environment running.

* Clone _'react-starter'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-starter.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-starter.git
  ```

* Install node modules

   ```bash
   cd react-starter
   npm install
   npm dedupe
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-starter/tags).

---

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard