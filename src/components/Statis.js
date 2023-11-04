export default function Statis({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got every thing! Ready to go ✈️"
            : ` 💼 You have ${numItems} on your list. And you already packed
          ${numPacked} (${percentage} %)`}
        </em>
      </footer>
    </div>
  );
}
