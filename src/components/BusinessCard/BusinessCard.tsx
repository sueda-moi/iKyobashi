// components/BusinessCard/BusinessCard.tsx
import React from 'react';
import Image from 'next/image';
import './BusinessCard.css';
import Link from 'next/link';

interface BusinessCardProps {
  title: string;
  description: string;
  iconSrc: string | React.ReactNode; 
  href: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ title, description, iconSrc, href }) => {
  const isImage = typeof iconSrc === 'string';

  return (
    <div className="business-card">
      <div className="icon-wrapper">
      {isImage ? (
          <Image src={iconSrc} alt={`${title} アイコン`} width={40} height={40} />
        ) : (
          iconSrc 
        )}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link href={href} className="read-button">READ</Link>
    </div>
  );
};

export default BusinessCard;
