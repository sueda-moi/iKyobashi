import { useState, useEffect } from 'react';
import styles from './InfoCardButton.module.css';

type InfoCardButtonProps = {
  onClickTeam: () => void;
  onClickCompany: () => void;
  onClickPhotos: () => void;
};

const InfoCardButton: React.FC<InfoCardButtonProps> = ({
  onClickTeam,
  onClickCompany,
  onClickPhotos,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 📱 Detect if screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile);
      }
    };
  }, []);

  if (!isMobile) return null; // Render only on mobile devices

  return (
    <>
      {/* 📝 Sticky tab button */}
      {/* {!isOpen && (
        <div className={styles.floatingButton} onClick={() => setIsOpen(true)} />
      )} */}
      {!isOpen && (
        <div className={styles.stickyButtonWrapper} onClick={() => setIsOpen(true)}>
          <div className={styles.stickyButtonSquare} />
          <div className={styles.stickyButtonLabelVertical}>サービス一覧</div>
        </div>
      )}

      {/* 📂 Expandable card list */}
      {isOpen && (
        <div className={styles.cardMenu}>
          <div
            className={styles.cardItem}
            onClick={() => {
              onClickTeam();
              setIsOpen(false);
            }}
          >
            <h3>チーム紹介</h3>
          </div>
          <div
            className={styles.cardItem}
            onClick={() => {
              onClickCompany();
              setIsOpen(false);
            }}
          >
            <h3>会社概要</h3>
          </div>
          <div
            className={styles.cardItem}
            onClick={() => {
              onClickPhotos();
              setIsOpen(false);
            }}
          >
            <h3>企業写真</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoCardButton;
