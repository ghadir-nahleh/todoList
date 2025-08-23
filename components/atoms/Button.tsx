import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "danger" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  loading?: boolean;
};

export default function Button({ variant = "primary", disabled, loading, children, ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold border transition-all duration-200 shadow-sm min-w-[80px]";
  const cursorClass = disabled || loading ? "cursor-not-allowed" : "cursor-pointer";

  let variantClass = "";
  if (variant === "primary") variantClass = "bg-blue-500 text-white border-transparent hover:bg-blue-600 hover:shadow-md";
  if (variant === "danger")  variantClass = "bg-red-600 text-white border-transparent hover:bg-red-700 hover:shadow-md hover:scale-105";
  if (variant === "outline") variantClass = "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400";

  // Apply disabled styling
  if (disabled || loading) {
    if (variant === "primary") variantClass = "bg-gray-400 text-gray-200 border-transparent";
    if (variant === "danger") variantClass = "bg-gray-400 text-gray-200 border-transparent";
    if (variant === "outline") variantClass = "bg-gray-100 text-gray-400 border-gray-200";
  }

  // Add inline styles for primary variant to force blue background, rounded corners, and better sizing
  const inlineStyles = variant === "primary" && !disabled && !loading ? 
    { 
      backgroundColor: '#3b82f6', 
      color: 'white', 
      borderRadius: '8px',
      padding: '12px 24px',
      minWidth: '80px'
    } : 
    { 
      borderRadius: '8px',
      padding: '12px 24px',
      minWidth: '80px'
    };

  return (
    <button 
      className={`${base} ${cursorClass} ${variantClass}`} 
      style={inlineStyles}
      disabled={disabled || loading} 
      {...props}
    >
      {loading ? "..." : children}
    </button>
  );
}