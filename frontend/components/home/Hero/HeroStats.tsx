const stats = [
  {
    value: "50K+",
    label: "Students",
  },
  {
    value: "100+",
    label: "Courses",
  },
  {
    value: "24×7",
    label: "AI Teacher",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-3xl font-bold text-blue-600">
            {item.value}
          </h2>

          <p className="text-slate-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}