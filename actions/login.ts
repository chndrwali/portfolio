'use server';

import * as z from 'zod';
import { loginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Validasi gagal. Periksa kembali email dan password Anda.' };
  }

  return { success: 'Login Berhasil!' };
};
