"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
}

const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>((
  {
    src,
    alt,
    width,
    height,
    priority = false,
    fill = false,
    sizes,
    quality = 75,
    placeholder = "empty",
    className,
    ...props
  },
  ref
) => {
  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fill={fill}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      className={cn("max-w-full h-auto", className)}
      {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
});

OptimizedImage.displayName = "OptimizedImage";

export { OptimizedImage };