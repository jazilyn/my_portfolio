// components/ImagePlaceholder.tsx
import React from "react";

export default function ImagePlaceholder({
  alt = "image placeholder",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/placeholder.png" alt={alt} {...props} />;
}