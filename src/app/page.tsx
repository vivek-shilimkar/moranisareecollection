import MainLayout from '@/components/layout/main-layout';
import HeroSlider from '@/components/home/hero-slider';
import FeaturedProducts from '@/components/home/featured-products';
import PromoBanner from '@/components/home/promo-banner';
import CategoryShowcase from '@/components/home/category-showcase';
import Testimonials from '@/components/home/testimonials';
import Newsletter from '@/components/home/newsletter';
import WhatsAppButton from '@/components/ui/whatsapp-button';

// Sample data for sungudi sarees section
const sungudiSarees = [
  {
    id: 'mini-checks-sungudi-green',
    title: 'Mini Checks Sungudi - Green',
    originalPrice: 2199,
    salePrice: 1499,
    image: 'https://web-assets.same.dev/3055100062/1072280663.jpeg',
    link: '/collections/traditional-madurai-sungudi-sarees/products/mini-checks-sungudi-green-1'
  },
  {
    id: 'big-border-sungudi-purple',
    title: 'Big Border Sungudi W/ Blouse - Purple',
    originalPrice: 2499,
    salePrice: 1899,
    image: 'https://web-assets.same.dev/2058614044/3199424062.jpeg',
    link: '/collections/traditional-madurai-sungudi-sarees/products/big-border-sungudi-purple-1'
  },
  {
    id: 'mini-checks-sungudi-green-2',
    title: 'Mini Checks Sungudi - Green',
    originalPrice: 2199,
    salePrice: 1599,
    image: 'https://web-assets.same.dev/121402461/2379347296.jpeg',
    rating: 4,
    reviews: 4,
    link: '/collections/traditional-madurai-sungudi-sarees/products/mini-checks-sungudi-green'
  },
  {
    id: 'big-border-sungudi-dark-green',
    title: 'Big Border Sungudi W/ Blouse - Dark Green',
    originalPrice: 2499,
    salePrice: 1899,
    image: 'https://web-assets.same.dev/2416062224/2749142489.jpeg',
    link: '/collections/traditional-madurai-sungudi-sarees/products/big-border-sungudi-dark-green'
  }
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Promo Banner - Kanchi Fusion Cotton */}
      <PromoBanner
        title="KANCHI FUSION COTTON"
        subtitle="Everyone drapes a saree slightly differently and everyones body looks different in it. But women in sarees are like snowflakes. Unique yet beautiful in their own way."
        buttonText="SHOP NOW"
        buttonLink="/collections/special-cotton"
        imageUrl="https://web-assets.same.dev/995533075/3825067281.jpeg"
      />

      {/* Sungudi Sarees Section */}
      <CategoryShowcase
        title="Sungudi Sarees"
        buttonText="View all"
        buttonLink="/collections/traditional-madurai-sungudi-sarees"
        products={sungudiSarees}
      />

      {/* Promo Banner - Silk Cotton Sarees */}
      <PromoBanner
        title="Silk Cotton Sarees"
        subtitle="Exquisite blend of Silk and Cotton"
        buttonText="SHOP NOW"
        buttonLink="/collections/boutique-sarees"
        imageUrl="https://web-assets.same.dev/373411153/2844051835.jpeg"
        reverse={true}
      />

      {/* Promo Banner - Mumul Cotton */}
      <PromoBanner
        title="Mumul Cotton"
        subtitle="Softest Cotton that makes you feel as light as a cloud"
        buttonText="Shop Now"
        buttonLink="/collections/mul-mul-cotton"
        imageUrl="https://web-assets.same.dev/2955092903/3554393337.jpeg"
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Popup */}
      <Newsletter />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </MainLayout>
  );
}
