'use client';

import { Combobox } from '@/components/combobox';
import { Weather } from '@/components/weather';
import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export default function WeatherURL() {
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

        <Weather />
      </div>

      <div className="flex flex-1 w-full h-full flex-col gap-6">
        <div className="pt-7 px-7 bg-gray-800 rounded-xl w-full flex flex-col gap-5">
          <h1 className="text-base text-gray-400 font-normal">
            Detalhes do clima
          </h1>

          <ul className="divide-y divide-gray-700">
            <li className="flex flex-row items-center justify-between py-4 self-stretch">
              <div className="flex items-center gap-3">
                <ThermometerSimple size={32} className="text-gray-500" />
                <span className="text-gray-200">Sensação térmica</span>
              </div>

              <span className="text-base text-gray-100 font-bold">26ºc</span>
            </li>
            <li className="flex flex-row items-center justify-between py-4 self-stretch">
              <div className="flex items-center gap-3">
                <CloudRain size={32} className="text-gray-500" />
                <span className="text-gray-200">Probabilidade de chuva</span>
              </div>

              <span className="text-base text-gray-100 font-bold">0%</span>
            </li>
            <li className="flex flex-row items-center justify-between py-4 self-stretch">
              <div className="flex items-center gap-3">
                <Wind size={32} className="text-gray-500" />
                <span className="text-gray-200">Velocidade do vento</span>
              </div>

              <span className="text-base text-gray-100 font-bold">8 km/h</span>
            </li>
            <li className="flex flex-row items-center justify-between py-4 self-stretch">
              <div className="flex items-center gap-3">
                <Drop size={32} className="text-gray-500" />
                <span className="text-gray-200">Umidade do ar</span>
              </div>

              <span className="text-base text-gray-100 font-bold">40%</span>
            </li>
            <li className="flex flex-row items-center justify-between py-4 self-stretch">
              <div className="flex items-center gap-3">
                <SunDim size={32} className="text-gray-500" />
                <span className="text-gray-200">Índice UV</span>
              </div>

              <span className="text-base text-gray-100 font-bold">5</span>
            </li>
          </ul>
        </div>

        <div className="pt-7 px-6 pb-6 bg-gray-800 rounded-xl w-full flex flex-col gap-5">
          <h1 className="text-base text-gray-400 font-normal hidden md:block">
            Previsão para 5 dias
          </h1>

          <div className="w-full grid grid-cols-5">
            <div className="w-full flex items-center flex-col text-gray-200 gap-3">
              <span className="text-sm font-bold">Ter</span>
              <Image
                src="/weather_storm_moment_day.svg"
                alt="Storm day"
                width={112}
                height={112}
              />

              <div className="flex flex-col gap-1 items-center">
                <span className="text-sm font-normal hidden lg:block">
                  Temporal
                </span>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-100 text-xs font-bold">32ºc</span>
                  <span className="text-gray-400 text-xs font-bold">26ºc</span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center flex-col text-gray-200 gap-3">
              <span className="text-sm font-bold">Qua</span>
              <Image
                src="/weather_storm_moment_day.svg"
                alt="Storm day"
                width={112}
                height={112}
              />

              <div className="flex flex-col gap-1 items-center">
                <span className="text-sm font-normal hidden lg:block">
                  Chuva
                </span>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-100 text-xs font-bold">32ºc</span>
                  <span className="text-gray-400 text-xs font-bold">26ºc</span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center flex-col text-gray-200 gap-3">
              <span className="text-sm font-bold">Qui</span>
              <Image
                src="/weather_storm_moment_day.svg"
                alt="Storm day"
                width={112}
                height={112}
              />

              <div className="flex flex-col gap-1 items-center">
                <span className="text-sm font-normal  hidden lg:block">
                  Poucas nuvens
                </span>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-100 text-xs font-bold">32ºc</span>
                  <span className="text-gray-400 text-xs font-bold">26ºc</span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center flex-col text-gray-200 gap-3">
              <span className="text-sm font-bold">Sex</span>
              <Image
                src="/weather_storm_moment_day.svg"
                alt="Storm day"
                width={112}
                height={112}
              />

              <div className="flex flex-col gap-1 items-center">
                <span className="text-sm font-normal hidden lg:block">
                  Nublado
                </span>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-100 text-xs font-bold">32ºc</span>
                  <span className="text-gray-400 text-xs font-bold">26ºc</span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center flex-col text-gray-200 gap-3">
              <span className="text-sm font-bold">Sab</span>
              <Image
                src="/weather_storm_moment_day.svg"
                alt="Storm day"
                width={112}
                height={112}
              />

              <div className="flex flex-col gap-1 items-center">
                <span className="text-sm font-normal hidden lg:block">
                  Céu limpo
                </span>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-100 text-xs font-bold">32ºc</span>
                  <span className="text-gray-400 text-xs font-bold">26ºc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
