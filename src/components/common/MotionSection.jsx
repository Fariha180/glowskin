import { motion } from 'framer-motion';

export function MotionSection({ as = 'section', children, className = '', delay = 0, ...props }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.48, delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function MotionItem({ as = 'div', children, className = '', delay = 0, ...props }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </Component>
  );
}
