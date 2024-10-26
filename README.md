# Real-Time Data Processing System for Weather Monitoring

## Application Overview
The Real-Time Data Processing System for Weather Monitoring is designed to monitor and display weather conditions across various locations in real time. The application efficiently processes weather data using rollups and aggregates, providing users with summarized insights.

## Objectives
- To create a user-friendly interface for accessing real-time weather data.
- To implement efficient data processing techniques using rollups and aggregates.
- To automate daily weather summary retrieval for different metro locations.
- To ensure reliable and well-tested APIs for seamless data interaction.

## Features
- **Real-Time Weather Updates**: Displays live weather data for various locations.
- **10-Day Forecast**: Provides users with a forecast for the next 10 days, allowing them to plan accordingly.
- **Current Weather Details**: Shows detailed current weather conditions, including temperature, humidity, and wind speed.
- **Monthly Overview**: Summarizes weather trends and averages for each month, helping users understand seasonal changes.
- **Data Aggregation**: Utilizes rollups and aggregates to provide summarized weather information.
- **Cron Job Automation**: Automatically retrieves daily weather data for every 1hrs and calculate the daily summaries for every 8hrs.
- **API Testing**: Ensures all API endpoints are functional and provide accurate responses.
- **Docker Containerization**: Facilitates consistent development and deployment environments.

## Repository
- GitHub Repository of Frontend WeathrApp : [WeatherApp-Frontend]([[https://github.com/yourusername/your-repository](https://github.com/nandkishorr/RuleEngine-Frontend.git](https://github.com/nandkishorr/WeatherApp-frontend.git)))
- 
## Technologies Used
- **Backend**: 
  - Node.js
  - Express.js
- **Database**: 
  - MongoDB
- **Containerization**: 
  - Docker
- **API Testing**: 
  - Postman
- **Scheduling**: 
  - Cron Jobs

## Endpoints and Their Purpose
| Endpoint               | Method   | Purpose                                            |
|-----------------------|----------|----------------------------------------------------|
| `/weather`        | GET      | Retrieve real-time complete weather data for a specific location. |
| `/summary`        | GET      | Get aggregated daily weather summaries for each metro locations. |
| `/forecast`       | POST     | Retrieve a 10-day weather forecast for a specific location. |
| `/summary/climate` | POST      | Summarize monthly weather trends. |
| `/hourly`         | POST      | Summarize monthly weather trends. |

## File Structure
Used Model View Controller architecture
```
/src                               # Backend application
├── /config                        # Configuration files
│   ├── Connection..js             # Database connection setup (MongoDB)
├── /controllers                   # API controllers (business logic for endpoints)
│   ├── weather.controller.js      # Logic for weather data handling
├── /models                        # Database models (MongoDB schemas)
│   ├── weather.model.js           # Weather schema
│   └── dailysummary.model.js      # Forecast schema
├── /routes                        # API routes
│   ├── weather.route.js           # Routes for weather endpoints
├── /jobs                          # Cron jobs and scheduled tasks
│   └── dailysummary.job.js        # Script for daily summary cron job
│   └── weather.job.js             # Script for hourly weather  cron job
├── index.js                       # Main Express app setup
└── package.json                   # Backend dependencies and scripts
└── README.md                      # Project documentation
```
## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional, if using Docker)

## Getting Started

### 1. Clone the Repository
To begin, clone the repository to your local machine:
```bash
git clone <repository_url>
cd weatherApp-Backend

# With npm
npm install


# .env
PORT=3000
MONGODB_URL: "your_mongo_atlas_connection_string"
OPEN_WEATHER_API_KEY: "your_open_weather_api_key"
# Start with npm
npm run start
```
## Conclusion
The Real-Time Data Processing System for Weather Monitoring provides a comprehensive solution for monitoring weather conditions, utilizing modern technologies and efficient data processing techniques to deliver accurate and timely information to users.
