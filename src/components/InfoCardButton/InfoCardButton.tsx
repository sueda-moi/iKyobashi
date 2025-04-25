import { useState } from 'react';

const InfoCardButton = () => {
  // 便箋が展開されているかどうかを制御する
  const [isOpen, setIsOpen] = useState(false);

  // 便箋の表示を切り替える
  const toggleInfoCards = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 便箋痕跡ボタン - モバイル版 */}
      <div
        className={`md:hidden fixed top-[40%] right-0 z-30 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleInfoCards}
      >
        {/* 便箋痕跡ボタン */}
        <div className="w-[30px] h-[30px] bg-yellow-300 rounded-lg shadow-lg cursor-pointer">
          {/* ここに便箋のアイコンを使用することができます */}
        </div>
      </div>

      {/* 便箋浮層 - モバイル版 */}
      <div
        className={`md:hidden fixed top-[40%] right-0 z-40 ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg p-4 rounded-md`}
        onClick={toggleInfoCards}
      >
        {/* ここは展開後の3つの便箋 */}
        <div className="flex flex-col gap-4">
          <div className="bg-yellow-200 p-4 rounded-md shadow-md">
            <h3 className="font-bold">チーム紹介</h3>
          </div>
          <div className="bg-yellow-200 p-4 rounded-md shadow-md">
            <h3 className="font-bold">会社概要</h3>
          </div>
          <div className="bg-yellow-200 p-4 rounded-md shadow-md">
            <h3 className="font-bold">企業写真</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCardButton;
