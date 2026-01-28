import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markNotificationRead } from "@/services/admin/notification";

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
