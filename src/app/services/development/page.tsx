'use client';
import "@/app/services/service.css"
import Image from 'next/image';
import { useMessage } from '@/lib/useMessage';

const Development: React.FC = () => {
  const getMessage = useMessage();
  const paragraphLines = getMessage('development', 'development_paragraph');
  return (
    <div className=" relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="flex w-full relative h-screen overflow-hidden">
        <Image src="/image/testsakura.jpg"
          alt="サマリー画像"
          fill
          className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="summaryText-container-child">

        <h2>
          {getMessage('development', 'development_title')}</h2>
        <p >
          {getMessage('development', 'development_description')}
        </p>
        {
          Array.isArray(paragraphLines)
            ? paragraphLines.map((line, idx) => (
              <p key={idx} className="mb-4 leading-relaxed">{line}</p>
            ))
            : <p className="mb-4 leading-relaxed">{paragraphLines}</p>
        }
      </div>
    </div>
  );
};

export default Development;
