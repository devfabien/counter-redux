import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../toolkit/counter";

export default function HomePage() {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  return (
    <div className="bg-sky-700 px-10 py-14 flex flex-col justify-center md:w-1/2 mx-auto my-4 items-center font-medium">
      <h1 className="text-5xl text-white font-semibold py-10">Counter App</h1>
      <div className="flex md:gap-20 gap-7 px-7 items-center my-5">
        <button
          className="bg-white rounded-md p-3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <p className="text-5xl py-6 px-10 p-3 bg-white rounded-full">{value}</p>
        <button
          className="bg-white rounded-md p-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <button
        className="bg-white rounded-md py-3 px-7 my-4"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}
