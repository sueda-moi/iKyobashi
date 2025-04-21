'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; 

type BusinessCardProps = {
  title: string;
  description: string;
  href?: string;
};

const BusinessCard: React.FC<BusinessCardProps> = ({ title, description, href }) => {
  const content = (
    <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
};

export default BusinessCard;
