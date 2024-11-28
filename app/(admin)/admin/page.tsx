import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function AdminPage() {
  const session = await auth();

  return (
    <>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <Button type="submit">Keluar</Button>
      </form>
    </>
  );
}
