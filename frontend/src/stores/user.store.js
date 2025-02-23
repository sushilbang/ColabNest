import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/lib/axios";

export const userStore = create((set, get) => ({
  user: null,
  loading: false,

  updateUserDetails: async (data) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.put("/user/updateDetails", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set({ user: res.data, loading: false });
      toast.success("Profile updated successfully!");
      return res;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "An error occurred");
    }
  },
}));