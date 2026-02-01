import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markNotificationDeleted, markNotificationRead } from "@/services/admin/notification";

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (notificationId) => markNotificationRead(notificationId),

    onSuccess: () => {
      // Refetch notifications list
      queryClient.invalidateQueries({ queryKey: ["notifications"] });

      // Refetch unread count (important!)
      queryClient.invalidateQueries({
        queryKey: ["notifications", "unreadCount"],
      });
    },
  });
}


export function useMarkNotificationDeleted() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (notificationId) => markNotificationDeleted(notificationId),
    onSuccess: () => {
      // Refetch notifications list
      queryClient.invalidateQueries({ queryKey: ["notifications"] });

      // Refetch unread count (important!)
      queryClient.invalidateQueries({
        queryKey: ["notifications", "unreadCount"],
      });
    },
  });
}
