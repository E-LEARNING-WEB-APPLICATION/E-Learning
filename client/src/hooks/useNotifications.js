import { fetchNotifications } from "@/services/admin/notification";
import { useQuery } from "@tanstack/react-query";

export function useNotifications(isRead) {
  return useQuery({
    queryKey: ["notifications", { isRead }],
    queryFn: () => fetchNotifications(isRead),
    initialData: [],
    // select: (page) => page.content,
  });
}
