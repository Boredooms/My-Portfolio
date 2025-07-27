import { ReactNode } from "react";

interface FragmentTextProps {
  children: string;
  className?: string;
  glitch?: boolean;
  dataText?: string;
}

export default function FragmentText({ children, className = "", glitch = false, dataText }: FragmentTextProps) {
  const letters = children.split('').map((char, index) => (
    <span key={index} className="letter">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <span 
      className={`fragment-text ${glitch ? 'glitch' : ''} ${className}`}
      data-text={dataText || children}
    >
      {letters}
    </span>
  );
}
