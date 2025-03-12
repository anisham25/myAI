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
  "Your time is limited; don't waste it living someone else's life. – Steve Jobs",
];

export const AILogo = () => (
  <Image src="/ai-logo.png" alt={AI_NAME} width={32} height={32} />
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
    <div className="z-50 mb-40 flex flex-col items-center fixed top-0 w-full p-4 bg-white shadow-md">
      {/* Peppa Logo and Name on the Same Line */}
      <div className="flex items-center gap-2">
        <AILogo />
        <p className="font-semibold text-lg">{CHAT_HEADER}</p>
      </div>

      {/* Smaller Quote Section */}
      <div className="mt-2 px-3 py-2 bg-gray-100 rounded-md text-center w-1/2 shadow-sm">
        <p className="text-xs font-medium italic"><b>Quote of the Day: </b>{quoteOfTheDay}</p>
      </div>

      {/* Clear Chat Button Positioned Right */}
      <div className="absolute top-4 right-4">
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
  );
}

