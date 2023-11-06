export default function HomePage() {
  return (
    <div className="bg-sky-700 px-10 py-20 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white font-semibold py-3">Counter App</h1>
      <div className="flex gap-20 px-7 font-medium items-center">
        <button className="bg-white rounded-md p-3">Decrement</button>
        <p className="text-5xl py-6 px-10 bg-white rounded-full">0</p>
        <button className="bg-white rounded-md p-3">Increment</button>
      </div>
    </div>
  );
}
