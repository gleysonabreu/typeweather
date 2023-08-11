import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API}&q=${q}&lang=pt`,
      {
        cache: 'no-cache',
      },
    );

    const responseBody = await response.json();

    return NextResponse.json(responseBody);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch data' },
      { status: 500 },
    );
  }
}
