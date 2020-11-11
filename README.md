# Apartment Ranker

## Purpose

This web application enables users to quickly compare apartments listed on Craigslist to help select their next home. Try it out [here](https://apartment-ranker.jurschler.com).

## How It Works

Users of this application submit links to listings to apartments on Craigslist. The application scrapes relevant data using Selenium and generates a card with this information. Users then assess values across several categories for each apartment to generate an aggregate ranking. Presently the application most reliably works using listings from [SF Bay Area Craigslist](https://sfbay.craigslist.org/search/sfc/apa), but more cities will be supported in the future.

## Demo GIF

<img src="https://github.com/jurschler2/apartment-ranker/blob/master/frontend/src/images/apartmentRankerDemo.gif?raw=true" width="75%" />

## Description

### Frontend

The Frontend was built using React and Redux for core UX logic, styled using Sass, and hosted on Netlify.

### Backend

The Backend was built using Flask for core API server logic, Selenium for web scraping, PostgreSQL for database management, and is served through Heroku.

## Installations

If you are downloading and running locally, please follow the below installation instructions.

### Frontend
```
cd frontend/
npm i
```
### Backend
```
cd backend/
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```