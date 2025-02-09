"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "@/lib/types";
import Link from "next/link";

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  onActiveCardChange,
}: {
  items: FeatureCard[];
  offset?: number;
  scaleFactor?: number;
  onActiveCardChange?: (card: FeatureCard) => void;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<FeatureCard[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    onActiveCardChange?.(cards[0]);
  }, [cards]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: FeatureCard[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="absolute dark:bg-black bg-white h-60 w-full max-w-md rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <card.icon className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                {card.title}
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-2 flex-1">
              {card.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};