"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ChatbotMock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chatbot Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <Card className="w-full max-w-3xl h-[85vh] rounded-3xl shadow-2xl bg-[#FFF9FB] flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#FFEFF4]">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-[#E76F8A]/20 flex items-center justify-center animate-pulse">
                  <span className="text-[#E76F8A] text-lg">💗</span>
                </div>
                <div>
                  <p className="font-medium text-[#3A3A4A]">
                    FemCare Assistant
                  </p>
                  <p className="text-xs text-[#6B6B7A]">
                    A safe space to talk, ask, and understand
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-[#6B6B7A] hover:text-[#3A3A4A]"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto text-sm leading-relaxed">
              <div className="max-w-[75%] bg-[#FFF1F5] p-4 rounded-2xl shadow-sm text-[#3A3A4A]">
                Hi 🌸  
                <br />
                I’m here whenever you want to talk — calmly, gently, and without judgment.
              </div>

              <div className="max-w-[75%] bg-[#FFF1F5] p-4 rounded-2xl shadow-sm text-[#3A3A4A]">
                You can ask me about:
                <ul className="list-disc list-inside mt-2 text-xs text-[#6B6B7A] space-y-1">
                  <li>Your cycle or symptoms</li>
                  <li>Daily lifestyle support</li>
                  <li>Understanding your dashboard</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-[#E76F8A] text-xs">
                <span className="animate-pulse">● ● ●</span>
                <span>listening</span>
              </div>
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t bg-white">
              <input
                type="text"
                disabled
                placeholder="Type here when you’re ready… (chat coming soon)"
                className="w-full rounded-full border px-5 py-3 text-sm bg-[#FFF9FB] cursor-not-allowed"
              />
              <p className="text-xs text-[#8A8A9A] mt-2 text-center">
                This is your space. There’s no rush.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* OBVIOUS Chat Launcher */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 px-5 py-4 rounded-full bg-[#E76F8A] hover:bg-[#dd5f7c] text-white shadow-xl transition-all"
        >
          <span className="text-xl">💬</span>
          <div className="text-left leading-tight">
            <p className="text-sm font-medium">Need support?</p>
            <p className="text-xs opacity-90">
              Talk to FemCare Assistant
            </p>
          </div>
        </button>
      </div>
    </>
  );
}
