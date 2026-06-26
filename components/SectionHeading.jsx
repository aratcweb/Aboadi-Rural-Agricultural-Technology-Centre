import { cn } from "@/lib/utils";

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  light = false, 
  className 
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold tracking-tight text-balance",
        light ? "text-white" : "text-green-950"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-balance",
          light ? "text-green-100" : "text-muted"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
