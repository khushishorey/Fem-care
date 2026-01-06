"use client";

import GreetingCard from "././components/GreetingCard";
import HealthSnapshot from "././components/HealthSnapshot";
import InsightsChart from "././components/InsightsChart";
import Recommendations from "././components/Recommendations";
import ChatbotMock from "././components/ChatbotMock";

export default function DashboardLayout() {
  return (
    <main className="min-h-screen bg-[#FFF9FB] p-6 space-y-6">
      <GreetingCard />
      <HealthSnapshot />
      <InsightsChart />
      <Recommendations />
      <ChatbotMock />
    </main>
  );
}
