/**
 * Material Symbols (Google Fonts Icons)
 * @see https://fonts.google.com/icons
 */
type IconVariant = "outlined" | "rounded" | "sharp";

type IconProps = {
  name: string;
  variant?: IconVariant;
  size?: number;
  className?: string;
};

const variantClass: Record<IconVariant, string> = {
  outlined: "material-symbols-outlined",
  rounded: "material-symbols-rounded",
  sharp: "material-symbols-sharp",
};

export function Icon({
  name,
  variant = "outlined",
  size = 24,
  className = "",
}: IconProps) {
  return (
    <span
      className={`${variantClass[variant]} select-none ${className}`}
      style={{ fontSize: size }}
      aria-hidden
    >
      {name}
    </span>
  );
}
