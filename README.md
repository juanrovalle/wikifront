### Wikipedia Featured News Project


**Wikipedia Featured News** is a web application that leverages the Wikipedia API to display **featured content** based on user-selected dates and languages. The application allows users to browse daily featured content, such as articles, news, and media, from Wikipedia.

  

**Frontend**: Built with **React** and styled for responsiveness (mobile-first design), it provides a clean and user-friendly interface. It allows users to:

-  **Select a date** and **language** to view featured content for that day.

- Browse content in a **paginated grid**.

- View articles with titles, images, and excerpts.

- Click on articles to open the full Wikipedia page.

### Key Features

  

### Technology Stack

 

-  **React**: For building the user interface.

-  **TypeScript**: For type-safe development.

-  **Capacitor**: To provide native support for mobile platforms.

-  **CSS/SCSS**: For styling and responsive design.

  

-  **Date and Language Selection**: Users can select a specific date and language to view the featured content for that day in different languages.

-  **Pagination**: The app displays content in a paginated grid format, making it easy to browse large sets of content.

-  **Translation**: The backend supports translating article titles and excerpts into different languages, making it more accessible to global audiences.

-  **Mobile Support**: The app is responsive, optimized for both mobile and desktop users. It also integrates with **Capacitor** to provide native mobile support for iOS and Android.

  

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

  

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

  

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.

  

### `npm run build`

  

Builds the app for production to the `build` folder.\

  

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

  

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

# Bonus Features Bonus

  

## 1- Docker Compose Support

  

This project includes support for **Docker Compose**, allowing you to easily build and run the app in a containerized environment.

  

## Prerequisites

  

Ensure you have **Docker** and **Docker Compose** installed on your system.

  

### Steps to Run the App with Docker Compose

  

**Build and start the app** using Docker Compose:

  

```

docker-compose up --build

```

  

This will build the Docker image and start the app, making it available at `http://localhost:3000`.

  

**Access the app** in your browser at:

` http://localhost:3000

`

  

**Shut down the app**:

  

```

docker-compose down

```

  

### Notes

  

- The app is served using **Nginx** inside the Docker container.

- You can modify the `docker-compose.yml` file to customize ports or add additional services as needed.

  

## 2- Capacitor Mobile Support

  

This project uses **Capacitor** to provide native support for Android and iOS platforms, enabling you to run the app as a native mobile application.

  

### Install Capacitor

  

```bash

npm  install  @capacitor/core  @capacitor/cli

```

  

### Build the Web App

  

```bash

npm  run  build

```

  

### Sync the Web Assets

  

```bash

npx  cap  sync

```

  

### Open Platforms in IDEs

  

**Android**: Run in Android Studio

  

```bash

npx  cap  open  android

```

  

**iOS**: Run in Xcode

  

```bash

npx  cap  open  ios

```

  

### Future Enhancements

  

-  **Infinite Scrolling**: Load additional content automatically as the user scrolls.

-  **Search Functionality**: Allow users to search for specific articles or topics.

-  **Additional APIs**: Incorporate more Wikipedia APIs to include other types of content, such as media or quotes.