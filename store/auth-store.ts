import { create } from 'zustand';
import { AuthState, User } from '@/types/auth';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,

  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const result = await nextAuthSignIn('credentials', {
        email,
        password,
        redirect: false
      });
      
      if (result?.ok) {
        set({ isLoading: false });
        return true;
      }
      
      set({ isLoading: false });
      return false;
    } catch (error) {
      set({ isLoading: false });
      return false;
    }
  },

  signOut: async () => {
    await nextAuthSignOut();
    set({ user: null });
  },

  signUp: async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
    set({ isLoading: true });
    try {
      // Mock signup - replace with real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ isLoading: false });
      return true;
    } catch (error) {
      set({ isLoading: false });
      return false;
    }
  }
}));