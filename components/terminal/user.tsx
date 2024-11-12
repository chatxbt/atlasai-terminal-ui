import { cn } from "@/lib/utils";

export const User = ({
  username = "user",
  domain = "atlasai",
  className,
}: {
  username?: string;
  domain?: string;
  className?: string;
}) => {
  return (
    <span className={cn(className)}>
      {username}
      <span className="text-orange-500">@{domain}</span>: ~{" "}
      <span className="text-green-500">$</span>
    </span>
  );
};
