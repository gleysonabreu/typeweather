import { Combobox } from '@/components/combobox';

export default function Home() {
  return (
    <main className="max-w-md w-full px-8 mt-48 md:px-0 md:mt-0 justify-start mx-auto flex flex-1 items-center md:justify-center gap-14 flex-col">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-gray-100 text-center text-xl md:text-3xl font-bold">
          Boas vindas ao <b className="text-brand-blue-night">TypeWeather</b>
        </h1>
        <span className="text-sm md:text-lg text-gray-200 text-center font-normal">
          Escolha um local para ver a previsão do tempo
        </span>
      </div>

      <Combobox />
    </main>
  );
}
