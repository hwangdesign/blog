"use client";

import Link from "next/link";
import { useFillHover } from "@/hooks/useFillHover";

type FillHoverLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function FillHoverLink({ href, children, className = "", onClick }: FillHoverLinkProps) {
  const { onMouseEnter, style } = useFillHover();

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </Link>
  );
}
