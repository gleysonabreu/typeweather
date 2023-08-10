export default async function LoadingWeather() {
  return (
    <div className="flex min-h-screen h-full flex-col lg:flex-row w-full p-6 gap-6 bg-gray-900">
      <div className="flex flex-1 bg-gray-800 rounded-2xl p-4 flex-col gap-4">
        <div className="flex flex-row gap-3 items-center">
          <div className="h-14 w-14 bg-gray-600 p-2 flex items-center justify-center rounded-lg animate-pulse" />

          <div className="h-14 w-full rounded-lg bg-gray-600 animate-pulse" />
        </div>

        <div className="w-full h-full bg-gray-600 rounded-lg flex flex-1 flex-col justify-between animate-pulse" />
      </div>

      <div className="flex flex-1 w-full h-full flex-col gap-6">
        <div className="bg-gray-800 rounded-xl w-full flex h-80 animate-pulse" />

        <div className="bg-gray-800 rounded-xl w-full flex h-60 animate-pulse" />
      </div>
    </div>
  );
}
