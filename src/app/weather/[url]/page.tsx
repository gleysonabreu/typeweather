import { Combobox } from '@/components/combobox';
import { Weather } from '@/components/weather';
import { WeatherInfo } from '@/components/weather-info';
import { WeatherItem } from '@/components/weather-item';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getWeatherForecast(url: string) {
  const response = await fetch(`${process.env.API_URL}/weather/${url}`, {
    next: {
      revalidate: 60 * 60, // 1h
    },
  });

  if (!response.ok) {
    return undefined;
  }

  return response.json();
}

type WeatherURLProps = {
  params: {
    url: string;
  };
};

type WeatherProps = {
  current: {
    city: string;
    region: string;
    country: string;
    localTime: Date;
    minTemp: number;
    maxTemp: number;
    condition: {
      text: string;
      icon: string;
      background: string;
    };
  };
  weatherDetails: {
    temperature: number;
    wind: number;
    humidity: number;
    uv: number;
    isDay: boolean;
    thermalSensation: number;
    dailyChanceOfRain: number;
  };

  forecast: {
    minTemp: number;
    maxTemp: number;
    condition: {
      text: string;
      icon: string;
      background: string;
    };
    date: Date;
  }[];
};

export default async function WeatherURL({ params }: WeatherURLProps) {
  const res = await getWeatherForecast(params.url);

  if (!res) {
    notFound();
  }

  const weather = res as WeatherProps;

  const weatherForecast5Days = weather.forecast;
  weatherForecast5Days.shift();

  return (
    <div className="flex min-h-screen h-full flex-col lg:flex-row w-full p-6 gap-6 bg-gray-900">
      <div className="flex flex-1 bg-gray-800 rounded-2xl p-4 flex-col gap-4">
        <div className="flex flex-row gap-3 items-center">
          <div className="h-14 w-14 bg-gray-600 p-2 flex items-center justify-center rounded-lg">
            <Link href="/">
              <Image
                src="/icon_logo.svg"
                alt="Icon logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          <Combobox />
        </div>

        <Weather
          {...weather.current}
          temperature={weather.weatherDetails.temperature}
        />
      </div>

      <div className="flex flex-1 w-full h-full flex-col gap-6">
        <div className="pt-7 px-7 bg-gray-800 rounded-xl w-full flex flex-col gap-5">
          <h1 className="text-base text-gray-400 font-normal">
            Detalhes do clima
          </h1>

          <WeatherInfo {...weather.weatherDetails} />
        </div>

        <div className="pt-7 px-6 pb-6 bg-gray-800 rounded-xl w-full flex flex-col gap-5">
          <h1 className="text-base text-gray-400 font-normal hidden md:block">
            Previsão para 5 dias
          </h1>

          <div className="w-full grid grid-cols-5">
            {weatherForecast5Days.map((item) => (
              <WeatherItem key={item.date.toString()} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
