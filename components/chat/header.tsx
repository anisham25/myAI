import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Happiness depends upon ourselves. - Aristotle",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Life is what happens when you're busy making other plans. - John Lennon",
];

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  // Get daily quote based on the current date
  const quoteOfTheDay = useMemo(() => {
    const index = new Date().getDate() % quotes.length;
    return quotes[index];
  }, []);

  return (
    <div className="z-10 flex flex-col justify-center items-center fixed top-0 w-full p-5 bg-white shadow-[0_10px_15px_-3px_rgba(255,255,255,1)]">
      <div className="flex w-full items-center justify-between">
        <div className="flex-1 flex justify-center items-center gap-2">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center">
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>
        </div>
      </div>

      {/* Quote of the Day Section */}
      <div className="mt-2 p-3 bg-gray-100 rounded-lg text-center w-full max-w-lg">
        <p className="text-sm font-semibold italic">{quoteOfTheDay}</p>
      </div>
    </div>
  );
}

