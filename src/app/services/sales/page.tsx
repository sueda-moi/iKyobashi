'use client';
import "./sales.css"
import Image from 'next/image';
import { useMessage } from '@/lib/useMessage';

const Sales: React.FC = () => {
const getMessage = useMessage();

  return (
    <div className=" container">
      <div className="flex w-full pb-[60px] relative h-[800px] mb-8">
        <Image src="/image/testsakura.jpg"
          alt="サマリー画像"
          fill
          className="w-full block object-cover z-[100]" />
      </div>
      <div className="summaryText-container-child">
        <section className="services-section-child">
          <h2 className="text-2xl font-bold text-center mb-8">{getMessage('sales', 'sales_title')}</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto text-center">
            {getMessage('sales', 'sales_description')}
          </p>
        </section></div>
      {/* <div className='childContent'>


      </div> */}

    </div>
  );
};

export default Sales;
