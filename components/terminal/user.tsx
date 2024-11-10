import { cn } from "@/lib/utils";

export const User = ({
  user = "user@atlasai",
  className,
}: {
  user?: string;
  className?: string;
}) => {
  return (
    <span className={cn(className)}>
      {user}: ~ <span className="text-green-500">$</span>
    </span>
  );
};
