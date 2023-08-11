'use client';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

const Provider = ({ children }: { children: ReactNode }) => {
  async function SWRFetcher(
    resource: RequestInfo | URL,
    init: RequestInit | undefined,
  ) {
    const response = await fetch(resource, init);
    const responseBody = await response.json();

    return responseBody;
  }
  return <SWRConfig value={{ fetcher: SWRFetcher }}>{children}</SWRConfig>;
};

export default Provider;
