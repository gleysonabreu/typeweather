import { NextResponse } from 'next/server';
import weatherConditions from '../../../../../../weather_conditions.json';

type Context = {
  params: {
    url: string;
  };
};

export async function GET(_request: Request, context: Context) {
  const TOTAL_FORECAST = 6;

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}&q=${context.params.url}&days=${TOTAL_FORECAST}&aqi=no&alerts=no&lang=pt`,
      {
        cache: 'no-cache',
      },
    );

    const responseBody = await response.json();

    const isDay = responseBody.current.is_day === 1 ? true : false;
    const currentIconCondition = weatherConditions.find(
      (item) => item.code === responseBody.current.condition.code,
    );

    const weather = {
      current: {
        city: responseBody.location.name,
        region: responseBody.location.region,
        country: responseBody.location.country,
        localTime: responseBody.location.localtime,
        minTemp: responseBody.forecast.forecastday[0].day.mintemp_c,
        maxTemp: responseBody.forecast.forecastday[0].day.maxtemp_c,
        condition: {
          text: responseBody.current.condition.text,
          icon: isDay
            ? currentIconCondition?.images.icon_day
            : currentIconCondition?.images.icon_night,
          background: isDay
            ? currentIconCondition?.images.bg_day
            : currentIconCondition?.images.bg_night,
        },
      },
      weatherDetails: {
        temperature: responseBody.current.temp_c,
        wind: responseBody.current.wind_kph,
        humidity: responseBody.current.humidity,
        uv: responseBody.current.uv,
        dailyChanceOfRain:
          responseBody.forecast.forecastday[0].day.daily_chance_of_rain,
        isDay,
        thermalSensation: responseBody.current.feelslike_c,
      },

      forecast: responseBody.forecast.forecastday.map(
        (forecast: {
          day: {
            mintemp_c: number;
            maxtemp_c: number;
            condition: { text: string; code: number };
          };
          date: Date;
        }) => {
          const currentIconCondition = weatherConditions.find(
            (item) => item.code === forecast.day.condition.code,
          );
          return {
            minTemp: forecast.day.mintemp_c,
            maxTemp: forecast.day.maxtemp_c,
            condition: {
              text: forecast.day.condition.text,
              icon: isDay
                ? currentIconCondition?.images.icon_day
                : currentIconCondition?.images.icon_night,
              background: isDay
                ? currentIconCondition?.images.bg_day
                : currentIconCondition?.images.bg_night,
            },
            date: forecast.date,
          };
        },
      ),
    };

    return NextResponse.json(weather);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch data' },
      { status: 500 },
    );
  }
}
