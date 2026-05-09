import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  // Base classes that apply to all buttons
  const baseClasses = "font-medium transition-colors transition-transform active:scale-95 flex items-center justify-center gap-2 rounded-full font-['Inter'] tracking-tight";

  // Variant specific classes
  const variants = {
    primary: "bg-primary text-on-primary hover:opacity-90 shadow-sm",
    secondary: "bg-blue-50 text-primary hover:bg-blue-100",
    dark: "bg-gray-900 text-white hover:bg-black rounded-lg", // App promo buttons are less rounded
    ghost: "text-text-primary hover:text-primary bg-transparent",
  };

  // Size specific classes
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base rounded-md", // Hero buttons are slightly differently rounded
  };

  // Construct the final class name
  const finalClassName = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
