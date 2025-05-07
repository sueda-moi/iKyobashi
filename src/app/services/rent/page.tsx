'use client';
import "./sales.css"
import Image from 'next/image';

const Pg002: React.FC = () => {
  // screen width detection 
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   handleResize(); // 初回チェック
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);


  // const [isAtBottom, setIsAtBottom] = useState(false);

  // 📜 スクロール位置によってページ下部かどうかを判定
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const fullHeight = document.documentElement.scrollHeight;

  //     // 「ページ最下部」に到達していれば true
  //     setIsAtBottom(scrollTop + windowHeight >= fullHeight - 20);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // 🔍 指定したセクションにスムーズスクロール
  // const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

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
          <h2 className="text-2xl font-bold text-center mb-8">不動産賃貸の仲介</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto text-center">
          賃貸物件の紹介・契約支援を行います。
          </p>
        </section></div>
      {/* <div className='childContent'>


      </div> */}

    </div>
  );
};

export default Pg002;
