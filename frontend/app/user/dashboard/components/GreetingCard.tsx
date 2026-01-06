import { Card } from "@/components/ui/Card";


export default function GreetingCard() {
  return (
    <Card className="p-6 bg-[#FFEFF4]">
      <h1 className="text-2xl font-semibold text-[#3A3A4A]">
        Hello, Khushi 🌸
      </h1>
      <p className="text-sm text-[#6B6B7A] mt-1">
        Here’s a gentle overview of your health journey so far.
      </p>
    </Card>
  );
}
