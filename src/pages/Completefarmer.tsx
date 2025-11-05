import WriteUpSection from '@/components/landing/WriteUpSectionfarmer';
import  Header  from '@/components/landing/Header';
import { CTABanner } from '@/components/landing/CTABanner';
import  Footer  from '@/components/landing/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
a<WriteUpSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default Index;
