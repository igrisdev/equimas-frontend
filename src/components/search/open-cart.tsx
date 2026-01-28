import clsx from "clsx";
import { Search } from "lucide-react";

export default function OpenCart({
  className,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center">
      <Search
        className={clsx(
          "h-7 transition-all ease-in-out group-hover:scale-110",
          className,
        )}
      />
    </div>
  );
}
