import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getHoverColorClass(index) {
  const colors = [
      'hover:bg-red-500/10',
      'hover:bg-green-500/10',
      'hover:bg-blue-500/10',
      'hover:bg-yellow-500/10',
      'hover:bg-purple-500/10',
  ];
  return colors[index % 5];
}
export function getColorClass(index) {
  const colors = [
      'bg-red-500/10',
      'bg-green-500/10',
      'bg-blue-500/10',
      'bg-yellow-500/10',
      'bg-purple-500/10',
  ];
  return colors[index % 5];
}