'use client';

import { logout } from '@/actions/logout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { useConfirm } from '@/hooks/use-confirm';
import { useCurrentUser } from '@/hooks/use-current-user';
import { ChevronUp, User2 } from 'lucide-react';

export const UserMenuFooter = () => {
  const [ConfirmDialog, confirm] = useConfirm('Apakah kamu yakin?', 'Anda akan keluar akun.');
  const user = useCurrentUser();

  const LogOut = async () => {
    const ok = await confirm();
    if (ok) {
      logout();
    }
  };

  return (
    <SidebarFooter>
      <ConfirmDialog />
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user?.image || ''} alt={user?.name || 'Undefined'} />
                  <AvatarFallback>
                    <User2 />
                  </AvatarFallback>
                </Avatar>
                {user?.name}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
              <DropdownMenuItem>
                <span>Akun</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={LogOut}>
                <span>Keluar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
