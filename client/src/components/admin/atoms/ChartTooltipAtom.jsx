const ChartTooltipAtom = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-white p-2 rounded shadow-sm border small">
      <strong>{label}</strong>
      <br />
      {payload.map((p, i) => (
        <div key={i}>{p.name}: {p.value}</div>
      ))}
    </div>
  );
};

export default ChartTooltipAtom;
