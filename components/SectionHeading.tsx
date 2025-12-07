import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block py-1 px-3 rounded-full bg-admox-green/10 border border-admox-green text-admox-green text-sm font-semibold tracking-wider uppercase mb-4">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
        {title.split(' ').map((word, index) => (
          <span key={index} className={index % 3 === 1 ? 'text-admox-yellow' : 'text-white'}>
            {word}{' '}
          </span>
        ))}
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r from-admox-green to-admox-yellow mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};