import { motion } from 'framer-motion';

import DrawImages from '@/components/shares/drawimages';

interface CardProps {
  src: string;
  key: any;
}

export default function DrawPoster({ src,key }: CardProps) {
  return (
    <>
      <motion.div className="rounded-xl">
        <div className="mx-auto w-full rounded-xl ">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <DrawImages
              alt=""
              className="h-[400px] w-full object-cover"
              height={400}
              src={src}
              style={{
                aspectRatio: '900 / 400',
                objectFit: 'cover',
              }}
              width={900}
              quality={70}
              loading={false}
              key={key}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
