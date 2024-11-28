import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { HeaderAdmin } from './_components/HeaderAdmin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <HeaderAdmin />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
