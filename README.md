# Wikipedia Featured News

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

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
    ```
    http://localhost:3000
    ```

 **Shut down the app**:
    
    To stop and remove the containers, run:
```    
 docker-compose down 
   ``` 
### Notes

-   The app is served using **Nginx** inside the Docker container.
-   You can modify the `docker-compose.yml` file to customize ports or add additional services as needed.
## 2- Capacitor Mobile Support
This project uses **Capacitor** to provide native support for Android and iOS platforms, enabling you to run the app as a native mobile application.
###  Install Capacitor
```bash
npm install @capacitor/core @capacitor/cli
```
###  Build the Web App

```bash
npm run build
```

###  Sync the Web Assets

```bash
npx cap sync
```

###  Open Platforms in IDEs

**Android**: Run in Android Studio

  ```bash
  npx cap open android
  ```

 **iOS**: Run in Xcode

  ```bash
  npx cap open ios
  ```