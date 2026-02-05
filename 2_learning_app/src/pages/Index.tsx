import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import CategorySection from '@/components/home/CategorySection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCourses />
      <CategorySection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
