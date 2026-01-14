import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Base styles including focus ring from new theme
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  
  const variants = {
    // Using semantic 'primary' instead of brand-600
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
  };

  const width = fullWidth ? "w-full" : "";
  const size = "px-6 py-3";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};