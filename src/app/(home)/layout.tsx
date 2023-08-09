import { Header } from '@/components/header';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full">
      <Header />
      {children}
    </div>
  );
}
