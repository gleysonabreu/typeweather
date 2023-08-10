'use client';

import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from '@phosphor-icons/react';

type WeatherInfoProps = {
  thermalSensation: number;
  humidity: number;
  wind: number;
  uv: number;
  dailyChanceOfRain: number;
};

export function WeatherInfo({
  humidity,
  thermalSensation,
  uv,
  wind,
  dailyChanceOfRain,
}: WeatherInfoProps) {
  return (
    <ul className="divide-y divide-gray-700">
      <li className="flex flex-row items-center justify-between py-4 self-stretch">
        <div className="flex items-center gap-3">
          <ThermometerSimple size={32} className="text-gray-500" />
          <span className="text-gray-200">Sensação térmica</span>
        </div>

        <span className="text-base text-gray-100 font-bold">
          {thermalSensation}ºc
        </span>
      </li>
      <li className="flex flex-row items-center justify-between py-4 self-stretch">
        <div className="flex items-center gap-3">
          <Wind size={32} className="text-gray-500" />
          <span className="text-gray-200">Velocidade do vento</span>
        </div>

        <span className="text-base text-gray-100 font-bold">{wind} km/h</span>
      </li>
      <li className="flex flex-row items-center justify-between py-4 self-stretch">
        <div className="flex items-center gap-3">
          <CloudRain size={32} className="text-gray-500" />
          <span className="text-gray-200">Probabilidade de chuva</span>
        </div>

        <span className="text-base text-gray-100 font-bold">
          {dailyChanceOfRain}%
        </span>
      </li>
      <li className="flex flex-row items-center justify-between py-4 self-stretch">
        <div className="flex items-center gap-3">
          <Drop size={32} className="text-gray-500" />
          <span className="text-gray-200">Umidade do ar</span>
        </div>

        <span className="text-base text-gray-100 font-bold">{humidity}%</span>
      </li>
      <li className="flex flex-row items-center justify-between py-4 self-stretch">
        <div className="flex items-center gap-3">
          <SunDim size={32} className="text-gray-500" />
          <span className="text-gray-200">Índice UV</span>
        </div>

        <span className="text-base text-gray-100 font-bold">{uv}</span>
      </li>
    </ul>
  );
}
