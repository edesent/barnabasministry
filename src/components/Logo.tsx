// Barnabas Ministry of Michigan — official seal logo.
// (Sword over open Bible · "Iron sharpeneth iron" · Encourage · Strengthen · Support)
// Square, transparent PNG; size it with a className like `h-11 w-auto`.

import Image from "next/image";

export default function Logo({
  className = "",
  title = "Barnabas Ministry of Michigan",
  priority = false,
}: {
  className?: string;
  title?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/barn-logo.png"
      alt={title}
      width={220}
      height={220}
      priority={priority}
      className={className}
    />
  );
}
