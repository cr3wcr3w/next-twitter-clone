import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type userDataType = {
  id: string;
  tweets: string;
  userId: string;
  userName: string;
};

type usePostStoreType = {
  userData: userDataType[];
  addUserData: (post: userDataType) => void;
  resetUserData: () => void;
  deletePost: (postId: string) => void;
};

export const usePostStore = create(
  immer<usePostStoreType>(set => ({
    userData: [],

    addUserData: post => {
      set((state: usePostStoreType) => {
        state.userData.push(post);
      });
    },

    resetUserData: () => {
      set((state: usePostStoreType) => {
        state.userData = [];
      });
    },

    deletePost: postId => {
      set((state: usePostStoreType) => {
        state.userData = state.userData.filter(post => post.id !== postId);
      });
    },
  }))
);
