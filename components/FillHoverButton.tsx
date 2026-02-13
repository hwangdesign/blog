"use client";

import { useFillHover } from "@/hooks/useFillHover";

type FillHoverButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export function FillHoverButton({
  onClick,
  children,
  className = "",
}: FillHoverButtonProps) {
  const { onMouseEnter, style } = useFillHover();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
