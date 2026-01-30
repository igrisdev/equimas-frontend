"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useState } from "react";

interface Review {
  id: number;
  name: string;
  company: string;
  rating: number;
  text: string;
}

export const CarouselReviews = ({ reviews }: { reviews: Review[] }) => {
  // Triple the list to ensure seamless looping
  const loopedReviews = [...reviews, ...reviews, ...reviews];

  // Card customization
  const CARD_WIDTH = 400; // px
  const GAP = 32; // px (gap-8 is 2rem = 32px)
  const TOTAL_ITEM_WIDTH = CARD_WIDTH + GAP;
  const FULL_WIDTH = reviews.length * TOTAL_ITEM_WIDTH; // Initial full width

  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time, delta) => {
    if (isHovered) return;

    // Movement speed (pixels per second)
    const speed = 40;
    let moveBy = (speed * delta) / 1000;

    // Move left
    let newX = x.get() - moveBy;

    // Reset when we've scrolled past the first set of items
    // Since we triplicated the array, we reset after one full length of the original array
    // The "middle" set will be what users see when the reset happens, making it seamless
    if (newX <= -FULL_WIDTH) {
      newX = 0;
    }

    x.set(newX);
  });

  return (
    <section className="overflow-hidden bg-transparent">
      <div
        className="relative w-full overflow-hidden pt-12 pb-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        <motion.div
          className="flex gap-8"
          style={{ x, width: `${loopedReviews.length * TOTAL_ITEM_WIDTH}px` }}
        >
          {loopedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="flex h-52 w-[400px] shrink-0 flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-neutral-200 text-neutral-200 dark:fill-neutral-800 dark:text-neutral-800"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="line-clamp-3 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                "{review.text}"
              </p>

              {/* User Info */}
              <div>
                <p className="font-bold text-neutral-900 dark:text-white">
                  {review.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {review.company}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
