import Image from 'next/image';

export function Weather() {
  return (
    <div
      className="w-full h-full bg-cover rounded-lg flex flex-1 flex-col justify-between"
      style={{
        backgroundImage: 'url(/weather_few_clouds_moment_night_background.png)',
      }}
    >
      <div className="flex w-full items-start justify-between lg:p-8 p-5">
        <div>
          <h1 className="text-base lg:text-xl text-gray-100 font-bold">
            Porto Alegre, RS
          </h1>
          <span className="text-xs lg:text-base text-gray-100 font-normal">
            Segunda-feira, 15 de maio de 2023
          </span>
        </div>

        <span className="text-xs lg:text-xl text-gray-100 text-right">
          21:39
        </span>
      </div>

      <div className="w-full flex flex-row items-end justify-between">
        <div className="flex flex-col gap-3 pb-5 lg:pb-8 pl-5 lg:pl-8">
          <h1 className="text-5xl lg:text-8xl font-extrabold text-white">
            28ºc
          </h1>

          <div className="flex flex-col lg:flex-row">
            <span className="text-white font-bold">32ºc / 26ºc</span>
            <span className="text-sm lg:text-base text-white">
              Poucas nuvens
            </span>
          </div>
        </div>

        <Image
          src="/weather_few_clouds_moment_night.svg"
          alt="Few Clouds"
          width={248}
          height={248}
          className="lg:w-60 lg:h-60 w-40 h-40"
        />
      </div>
    </div>
  );
}
