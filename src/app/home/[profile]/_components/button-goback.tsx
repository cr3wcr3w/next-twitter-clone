'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ButtonGoBack() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <ArrowLeft />
    </button>
  );
}
