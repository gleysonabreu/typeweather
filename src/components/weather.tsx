import dayjs from 'dayjs';
import Image from 'next/image';
import 'dayjs/locale/pt-br';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.locale('pt-br');
dayjs.extend(localizedFormat);

type WeatherProps = {
  temperature: number;
  condition: {
    text: string;
    icon: string;
    background: string;
  };
  city: string;
  country: string;
  region: string;
  localTime: Date;
  minTemp: number;
  maxTemp: number;
};

export function Weather(props: WeatherProps) {
  return (
    <div
      className="w-full h-full bg-cover rounded-lg flex flex-1 flex-col justify-between"
      style={{
        backgroundImage: `url(${props.condition.background})`,
      }}
    >
      <div className="flex w-full items-start justify-between lg:p-8 p-5">
        <div>
          <h1 className="text-base lg:text-xl text-gray-100 font-bold">
            {props.city}, {props.region}
          </h1>
          <span className="text-xs lg:text-base text-gray-100 font-normal">
            {dayjs(props.localTime).format('dddd, ll')}
          </span>
        </div>

        <span className="text-xs lg:text-xl text-gray-100 text-right">
          {dayjs(props.localTime).format('LT')}
        </span>
      </div>

      <div className="w-full flex flex-row items-end justify-between">
        <div className="flex flex-col gap-3 pb-5 lg:pb-8 pl-5 lg:pl-8">
          <h1 className="text-5xl lg:text-8xl font-extrabold text-white">
            {props.temperature}ºc
          </h1>

          <div className="flex items-center gap-2 flex-col md:flex-row">
            <span className="text-white font-bold text-xl">
              {props.maxTemp}ºc / {props.minTemp}ºc
            </span>
            <div className="w-2 h-2 rounded-full bg-white opacity-40 hidden md:block" />
            <span className="text-sm lg:text-base text-white">
              {props.condition.text}
            </span>
          </div>
        </div>

        <Image
          src={props.condition.icon}
          alt="Few Clouds"
          width={248}
          height={248}
          className="lg:w-60 lg:h-60 w-40 h-40"
        />
      </div>
    </div>
  );
}
