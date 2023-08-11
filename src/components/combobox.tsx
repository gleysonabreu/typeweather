'use client';

import { Fragment, useState } from 'react';
import useSWR from 'swr';
import { Combobox as ComboboxHeadless, Transition } from '@headlessui/react';
import { SpinnerGap } from '@phosphor-icons/react';
import { debounce } from '@/helpers/debounce';
import { useRouter } from 'next/navigation';

interface City {
  id: number;
  name: string;
  country: string;
  url: string;
}

const DEBOUNCE_DELAY = 500;

export function Combobox() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const handleQueryChange = debounce((newQuery: string) => {
    setSearchQuery(newQuery);
  }, DEBOUNCE_DELAY);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { data: cities, isLoading } = useSWR<City[]>(
    searchQuery !== '' && searchQuery.length > 2
      ? `${apiUrl}/search?q=${encodeURIComponent(searchQuery)}`
      : null,
    {
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
    },
  );

  const filteredCities =
    searchQuery === ''
      ? cities
      : cities?.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(searchQuery.toLowerCase().replace(/\s+/g, '')),
        );

  function redirectToWeather(city: City) {
    setSelectedCity(city);

    router.push(`/weather/${city.url}`);
  }

  return (
    <div className="w-full">
      <ComboboxHeadless value={selectedCity} onChange={redirectToWeather}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left focus:outline-none sm:text-sm">
            <ComboboxHeadless.Input
              placeholder="Pesquisar cidade"
              className="w-full disabled:opacity-60 h-14 py-2 pl-3 pr-10 text-sm leading-5 bg-gray-600 px-5 text-gray-100 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
              displayValue={(city: City) =>
                city && `${city.name}, ${city.country}`
              }
              onChange={(event) => handleQueryChange(event.target.value)}
            />
            {isLoading && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <SpinnerGap
                  className="h-5 w-5 text-brand-blue-night animate-spin"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchQuery('')}
          >
            <ComboboxHeadless.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-lg bg-gray-500 py-1 text-base shadow-lg ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCities?.length === 0 && searchQuery !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-100">
                  Nada encontrado...
                </div>
              ) : (
                filteredCities?.map((city) => (
                  <ComboboxHeadless.Option
                    key={city.id}
                    className="relative cursor-default select-none py-3 border-b border-gray-600 last:border-b-0 px-5 text-gray-100 hover:bg-gray-600 transition-all"
                    value={city}
                  >
                    <span className="block truncate">
                      {city.name}, {city.country}
                    </span>
                  </ComboboxHeadless.Option>
                ))
              )}
            </ComboboxHeadless.Options>
          </Transition>
        </div>
      </ComboboxHeadless>
    </div>
  );
}
