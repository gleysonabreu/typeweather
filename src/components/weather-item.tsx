import dayjs from 'dayjs';
import Image from 'next/image';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

type WeatherItemProps = {
  maxTemp: number;
  minTemp: number;
  condition: {
    text: string;
    icon: string;
    background: string;
  };
  date: Date;
};

export function WeatherItem(props: WeatherItemProps) {
  return (
    <div className="w-full flex items-center flex-col text-gray-200 gap-3">
      <span className="text-sm font-bold capitalize">
        {dayjs(props.date).format('dddd').substring(0, 3)}
      </span>
      <Image
        src={props.condition.icon}
        alt={props.condition.text}
        width={67}
        height={67}
        className="w-16 h-16"
      />

      <div className="flex flex-col gap-1 items-center">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="text-gray-100 text-xs font-bold">
            {props.maxTemp}ºc
          </span>
          <span className="text-gray-400 text-xs font-bold">
            {props.minTemp}ºc
          </span>
        </div>
      </div>
    </div>
  );
}
