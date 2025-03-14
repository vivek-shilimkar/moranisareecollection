import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  products: {
    id: string;
    title: string;
    originalPrice: number;
    salePrice: number;
    image: string;
    link: string;
    rating?: number;
    reviews?: number;
  }[];
}

const CategoryShowcase = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  products
}: CategoryProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-light text-primary">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
          <Link href={buttonLink} className="text-secondary hover:underline text-sm">
            {buttonText}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm group relative">
              {/* Sale badge */}
              <div className="absolute top-2 left-2 bg-secondary text-white text-xs px-2 py-1 z-10">
                Save Rs. {product.originalPrice - product.salePrice}
              </div>

              {/* Quick view */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Link
                  href={product.link}
                  className="bg-white text-primary text-xs px-2 py-1 rounded"
                >
                  Quick view
                </Link>
              </div>

              {/* Product image */}
              <Link href={product.link} className="block relative aspect-square overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Product info */}
              <div className="text-center">
                <h3 className="text-sm font-medium text-primary mb-1">
                  <Link href={product.link}>{product.title}</Link>
                </h3>

                <div className="flex items-center justify-center mb-2">
                  <span className="text-gray-500 line-through mr-2">Rs. {product.originalPrice.toFixed(2)}</span>
                  <span className="text-secondary font-medium">Rs. {product.salePrice.toFixed(2)}</span>
                </div>

                {/* Rating (if available) */}
                {product.reviews && product.reviews > 0 && product.rating && (
                  <div className="flex items-center justify-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
