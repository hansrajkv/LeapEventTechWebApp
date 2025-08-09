# LeapEventTechWebApp

This is an Event listing Web Application which lists all the event based on days(30, 60 or 180) and showing top sales by amount and count.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

# Load Dependencies

To load dependencies run

```bash
npm install
```

## Development server

Make sure your API is running on the given baseURL hardcoded in the WebApp which is 'https://localhost:44346' - If you're using a different port, please update the baseURLs in both the component.ts file of the components.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# Tech Stack

- Angular 19
- HttpClient for direct http calls to our Event web API

# Approach

1) Created components LeapEventTechApp and SalesSummary.
2) Added logic in LeapEventTechAppComponent to fetch the event list from the WebAPI and render it in a table structure. Added a button to move to the sales page.
3) Added logic in SalesSummaryComponent to fetch the top5 sales by amount and count and render it in a table structure. Added a button to move back to the events page.
4) You can sort the event name and Start column by clicking on the header.
5) Added logic to route between the two components in app.routes.ts, also added RouterOutlet in app.component.ts and html.
6) Used direct http calls to call our API and fetch the required data.
7) Added error handling logic if API fails to provide the response to the app.
8) Added basic CSS to have good look and feel to the WebAPP.