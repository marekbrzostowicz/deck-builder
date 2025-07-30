export const colorMap = {
  common: "bg-slate-400",
  rare: "bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700",
  epic: "bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-600",
  legendary: "bg-gradient-to-br from-emerald-400 via-indigo-400 to-amber-400",
  champion: "bg-gradient-to-br from-amber-400 via-indigo-200 to-amber-400",
} as const;

export const getColor = (typeName: string): string => {
  return colorMap[typeName as keyof typeof colorMap] || "bg-slate-500";
};

export const colorMapBorders = {
  common: "border-slate-100",
  rare: "border-orange-200",
  epic: "border-purple-200",
  legendary: "border-amber-200",
} as const;

export const getColorBorder = (typeName: string): string => {
  return (
    colorMapBorders[typeName as keyof typeof colorMapBorders] ||
    "border-slate-300"
  );
};

export const colorMapShadows = {
  common: "shadow-slate-400/50",
  rare: "shadow-orange-500/50",
  epic: "shadow-purple-700/50",
  legendary: "shadow-amber-400/50",
} as const;

export const getColorShadow = (typeName: string): string => {
  return (
    colorMapShadows[typeName as keyof typeof colorMapShadows] ||
    "shadow-slate-500/50"
  );
};

export const colorMapText = {
  common: "text-slate-300",
  rare: "text-orange-300",
  epic: "text-purple-400",
  legendary: "text-amber-200",
} as const;

export const getColorText = (typeName: string): string => {
  return (
    colorMapText[typeName as keyof typeof colorMapBorders] || "text-slate-300"
  );
};
