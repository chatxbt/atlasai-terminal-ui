import { user } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const User = ({
  username = user.username,
  domain = user.domain,
  className,
}: {
  username?: string;
  domain?: string;
  className?: string;
}) => {
  return (
    <p className={cn(className)}>
      {username}
      <span className="text-orange-500">@{domain}</span>: ~&nbsp;
      <span className="text-green-500">$</span>
    </p>
  );
};
