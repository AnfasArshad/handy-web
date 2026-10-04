import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'teal' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href = '#',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.2 gap-2.5 font-semibold',
  }[size];

  const variantStyles = {
    primary:
      'bg-brand-blue-600 text-white hover:bg-brand-blue-700 active:bg-brand-blue-800 shadow-sm hover:shadow focus-visible:ring-brand-blue-600',
    secondary:
      'bg-slate-100 text-brand-blue-900 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-slate-400',
    teal:
      'bg-brand-teal-500 text-white hover:bg-brand-teal-600 active:bg-brand-teal-700 shadow-sm hover:shadow focus-visible:ring-brand-teal-500',
    outline:
      'border border-slate-300 text-slate-700 hover:border-brand-blue-600 hover:text-brand-blue-600 active:bg-brand-blue-50/50 bg-white focus-visible:ring-brand-blue-600',
  }[variant];

  const fullClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (asLink) {
    return (
      <a href={href} className={fullClassName}>
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={fullClassName} {...props}>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}
