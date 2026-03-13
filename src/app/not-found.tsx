import ErrorMain from '@/components/containers/ErrorMain';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <ErrorMain />
      <Link href='/'>Return Home</Link>
    </div>
  );
}
