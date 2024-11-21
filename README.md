# Welcome to BookMyAirline

## Project Setup:
- Clone the project on your local.
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a new `.env` file in the root directory and add the following environment variable:
    - `PORT=3000`
Inside the `src/config` folder create a new file `config.json` and add the following piece of json:


```
{
  "development": {
    "username": <YOUR DB LOGIN>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx seequelize db:migrate`


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - An airport belongs to one city but a city can have many airports.
  - A flight belongs to one airport but an airport can have many flights.

  ## Tables

  ### City -> id, Name, created_at, udated_at
  ### Airport -> id, Name, address, city_id, created_at, updated_at
      Relationship -> City has many airports and Airport belongs to a city (one to many)