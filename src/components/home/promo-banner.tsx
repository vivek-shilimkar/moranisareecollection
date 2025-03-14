import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PromoBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  altText?: string;
  reverse?: boolean;
}

const PromoBanner = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
  altText = "Promotional image",
  reverse = false,
}: PromoBannerProps) => {
  return (
    <section className={`py-12 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container-custom">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
          {/* Image side */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-4">{title}</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">{subtitle}</p>
            <div>
              <Link
                href={buttonLink}
                className="inline-block bg-primary text-white py-2 px-6 rounded hover:bg-primary/90 transition-colors"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
