import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full flex items-center justify-center p-12">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={186} height={32} />
      </Link>
    </header>
  );
}
