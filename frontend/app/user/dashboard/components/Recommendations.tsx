import { Card } from "@/components/ui/Card";


const suggestions = [
  {
    title: "What you can do today",
    description: "Take a short walk, hydrate well, and rest when needed.",
  },
  {
    title: "Lifestyle suggestions",
    description: "Gentle movement, consistent sleep, and balanced meals can help.",
  },
  {
    title: "When to consult a doctor",
    description: "If symptoms feel overwhelming or change suddenly.",
  },
];

export default function Recommendations() {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-lg font-medium text-[#3A3A4A]">
        Supportive Guidance
      </h2>

      {suggestions.map((item) => (
        <div key={item.title}>
          <p className="font-medium text-sm text-[#4A4A5A]">
            {item.title}
          </p>
          <p className="text-sm text-[#6B6B7A]">
            {item.description}
          </p>
        </div>
      ))}
    </Card>
  );
}
