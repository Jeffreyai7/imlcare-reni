import Image from "next/image";
import logo from "@/public/imlcare.jpeg";
import { cn } from "@/lib/utils";

export default function BrandLogo({
  className,
  sizes = "(min-width: 1024px) 112px, 96px",
}: {
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={logo}
      alt="Impact Lives Care Limited"
      sizes={sizes}
      className={cn("size-16 rounded-xl bg-white object-contain lg:size-20", className)}
    />
  );
}
