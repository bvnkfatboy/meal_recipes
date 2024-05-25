import Image from "next/image";


export default function DrawImage({
  src,
  alt = "",
  className,
  width,
  height,
  loading,
  quality,
  style,
  key = "",
}: {
  key: any;
  src: string;
  alt?: string;
  className?: any;
  width: number;
  height: number;
  loading: boolean;
  quality: number;
  style: any;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading ? "lazy" : undefined}
      priority={!loading ? true : undefined}
      quality={quality}
      draggable={false}
      style={style}
      key={key}
    />
  );
}

