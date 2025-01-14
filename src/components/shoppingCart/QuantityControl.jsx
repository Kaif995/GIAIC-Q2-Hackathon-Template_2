export default function QuantityControl({
  quantity,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="flex overflow-hidden gap-8 justify-between items-center px-4 py-3 text-base bg-stone-50  text-gray-700">
      <button
        onClick={onDecrement}
        className="self-stretch my-auto"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <div className="self-stretch my-auto text-indigo-950">{quantity}</div>
      <button
        onClick={onIncrement}
        className="self-stretch my-auto text-gray-700"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
