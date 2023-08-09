'use client';

import { Fragment, useState } from 'react';
import { Combobox as ComboboxHeadless, Transition } from '@headlessui/react';
import { SpinnerGap } from '@phosphor-icons/react';

type City = {
  id: number;
  name: string;
  country: string;
  url: string;
};

const cities: City[] = [
  {
    id: 1,
    name: 'Wade Cooper',
    country: 'United Kingdom',
    url: 'united-kingdom',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    country: 'United Kingdom',
    url: 'united-kingdom',
  },
  {
    id: 3,
    name: 'Devon Webb',
    country: 'United Kingdom',
    url: 'united-kingdom',
  },
  { id: 4, name: 'Tom Cook', country: 'United Kingdom', url: 'united-kingdom' },
  {
    id: 5,
    name: 'Tanya Fox',
    country: 'United Kingdom',
    url: 'united-kingdom',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    country: 'United Kingdom',
    url: 'united-kingdom',
  },
];

export function Combobox() {
  const [citySelected, setCitySelected] = useState('');
  const [query, setQuery] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const filteredPeople =
    query === ''
      ? cities
      : cities.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );
  return (
    <div className="w-full">
      <ComboboxHeadless
        value={citySelected}
        onChange={setCitySelected}
        disabled={isLoading}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left focus:outline-none sm:text-sm">
            <ComboboxHeadless.Input
              placeholder="Buscar local"
              className="w-full disabled:opacity-60 h-14 py-2 pl-3 pr-10 text-sm leading-5 bg-gray-600 px-5 text-gray-100 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
              displayValue={(city: City) => city.name}
              onChange={(event) => setQuery(event.target.value)}
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
            afterLeave={() => setQuery('')}
          >
            <ComboboxHeadless.Options className="absolute mt-1 max-h-40 w-full overflow-auto rounded-lg bg-gray-500 py-1 text-base shadow-lg ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-100">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <ComboboxHeadless.Option
                    key={person.id}
                    className="relative cursor-default select-none py-3 border-b border-gray-600 last:border-b-0 px-5 text-gray-100 hover:bg-gray-600 transition-all"
                    value={person}
                  >
                    <span className="block truncate">{person.name}</span>
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
