import { Card } from "@/components/ui/Card";

const metrics = [
  { label: "BMI", value: "23.4" },
  { label: "Cycle Regularity", value: "Irregular" },
  { label: "Activity Level", value: "Moderate" },
  { label: "Stress Level", value: "3 / 5" },
];

export default function HealthSnapshot() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((item) => (
        <Card key={item.label} className="p-4 text-center">
          <p className="text-xs text-[#7A7A8A]">{item.label}</p>
          <p className="text-lg font-medium text-[#3A3A4A] mt-1">
            {item.value}
          </p>
        </Card>
      ))}
    </div>
  );
}
