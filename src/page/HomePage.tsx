import { useSelector } from "react-redux";

export default function HomePage() {
  const value = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  return (
    <div className="bg-sky-700 px-10 py-14 flex flex-col justify-center md:w-1/2 mx-auto my-10 items-center font-medium">
      <h1 className="text-5xl text-white font-semibold py-10">Counter App</h1>
      <div className="flex md:gap-20 gap-7 px-7 items-center my-5">
        <button className="bg-white rounded-md p-3">Decrement</button>
        <p className="text-5xl py-6 px-10 p-3 bg-white rounded-full">{value}</p>
        <button className="bg-white rounded-md p-3">Increment</button>
      </div>
      <button className="bg-white rounded-md py-3 px-7 my-4">Reset</button>
    </div>
  );
}
