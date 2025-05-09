# Soar Test Dashboard

## None of the code is written by AI. Everything is handcrafted by me

### Demo URL: https://soar-test-pearl.vercel.app/

### Tech stack used

- NextJS 15
- TailwindCSS
- Tanstack Form
- ts-rest for type-safe API calls
- Recharts (for charts)
- zod for validation schema
- Bun package manager

### How to run locally

- Checkout the project
- Install bun.sh or nodeJS
- run `npm install`
- run `cp env.sample .env`
- run `npm run dev`
- make sure the port that is running in localhost is the same as described in `.env` most likely it will be 3000

#### API Data

- The mock data is in the `/data/mockData` folder, change anything to see it change on the site

### Description

This project used NextJS and React Server Components (RSC) to fetch actual data from an API endpoint, the api endpoint is described in the `app/api` folder, all the data is coming from `/api/mockData` folder.

I am using `ts-rest` to have end to end type-safety from the API response right down to the components.

Design is fully responsive

In the settings page, I am using Tanstack Form to define zod form validations, and error handling.

Whole app is performant which JS payload just around 100kb, while most of the rendering is server-side

Whole app is accessiblity optimized, with ARIA labels, keyboard navigations and text data where charts are not available
