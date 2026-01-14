import type { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return <span className="badge">{children}</span>;
}
