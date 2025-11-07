import WriteUpSection from '@/components/landing/WriteUpSectionfarmer';
import  Header  from '@/components/landing/Header';
import { CTABanner } from '@/components/landing/CTABanner';
import  Footer  from '@/components/landing/Footer';

const Index = () => {
  return (
     <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      <main className="">
a<WriteUpSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
