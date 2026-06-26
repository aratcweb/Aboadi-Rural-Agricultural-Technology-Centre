import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({ 
  className, 
  variant = "primary", 
  size = "md", 
  asChild = false, 
  href, 
  children, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 rounded-md";
  
  const variants = {
    primary: "bg-green-900 text-white hover:bg-green-950",
    secondary: "bg-cream text-green-950 hover:bg-green-100",
    outline: "border-2 border-green-900 text-green-950 hover:bg-green-50",
    ghost: "text-green-950 hover:bg-green-100",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-11 w-11",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
