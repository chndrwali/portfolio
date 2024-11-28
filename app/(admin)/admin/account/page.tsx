'use client';

import { useCurrentUser } from '@/hooks/use-current-user';

export default function AccountPage() {
  const user = useCurrentUser();

  return <>{JSON.stringify(user)}</>;
}
