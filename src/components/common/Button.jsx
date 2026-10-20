import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-ink text-white hover:bg-sage',
  sage: 'bg-sage text-white hover:bg-ink',
  outline: 'border border-ink/20 bg-transparent text-ink hover:border-sage hover:text-sage',
  light: 'bg-white text-ink hover:bg-beige',
};

export function Button({ as = 'button', variant = 'primary', className = '', children, ...props }) {
  const Component = as === 'link' ? Link : as;
  return (
    <Component className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </Component>
  );
}
