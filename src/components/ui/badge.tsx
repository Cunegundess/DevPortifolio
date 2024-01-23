import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  color?: string;
}

function Badge({ children, bgColor, textColor }: BadgeProps) {
  //   const bgColor = color ? `bg-${color}-200` : "";
  //   const textColor = color ? `text-${color}-800` : "";
  return (
    <span
      className={`inline-flex items-center rounded-md ${bgColor} px-2 py-1 mx-2 mt-5 text-xs font-bold ${textColor}`}
    >
      {children}
    </span>
  );
}

export default Badge;
