import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-dvh bg-black text-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-10">
        <h2 className="text-center">Hmm...this page doesn&apos;t exist.</h2>
        <Link href="/" className="hover:underline">
          Return Home
        </Link>
      </div>
    </main>
  );
}
