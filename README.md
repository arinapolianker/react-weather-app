# Weather App

This is a simple weather application built with React, Axios, and OpenWeather API. The app allows users to search for weather information for any city or use their current geolocation to get weather data.

## Features

- Search for weather by city name.
- View current weather conditions, including temperature, humidity, wind speed, and more.
- Use geolocation to get weather information for your current location.
- Dynamic background color based on the time of day.

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
```

### 2. Install dependencies:
Navigate to the project folder and install the necessary dependencies using npm or yarn:
```bash
cd weather-app
npm install
# or
yarn install
```

### 3. API Key
Sign up on [OpenWeatherMap](https://openweathermap.org/) to get your own API key. Replace the `apiKey` in the `App.js` file with your key.

### 4. Run the App:
Once the dependencies are installed and the API key is set up, run the application:
```bash
npm start
# or
yarn start
```

This will start the development server, and you can view the app in your browser at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the OpenWeather API.
- **OpenWeather API**: Provides weather data based on city or geolocation.
- **CSS**: Used for styling the app.

## Components

- **App**: The main component that holds the state and handles user input for searching weather data.
- **Weather**: Displays the weather data including temperature, humidity, wind speed, etc.
- **Footer**: A simple footer component that can contain additional information like credits or links.

## Usage

- Enter the name of a city in the search bar to get the weather for that city.
- Click the "Locate Me" button to fetch weather data based on your current geolocation.
- The background changes color based on the time of day:
  - **Night (6:00 PM - 6:00 AM)**: Darker color theme.
  - **Morning (6:00 AM - 7:00 AM)**: Light gradient with sunrise colors.
  - **Day (7:00 AM - 5:00 PM)**: Bright, clear sky theme.
  - **Evening (5:00 PM - 6:00 PM)**: Sunset colors.
Sunrise and sunset times are displayed based on the city or geolocation selected.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.
- React and Axios for making the development process smooth.
- Icons are provided by [Font Awesome](https://fontawesome.com/).

## Contact

If you have any questions, feel free to open an issue or contact me at [arinapolianker@gmail.com].
