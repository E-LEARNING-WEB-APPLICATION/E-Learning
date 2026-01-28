import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { API_BASE_PATH, API_URL } from "@/utils/apiClient";
import { getToken } from "@/utils/auth";

export function useNotificationSSE() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const token = getToken();
    if (!token) return;

    const eventSource = new EventSource(
      `${API_URL}${API_BASE_PATH}/notifications/stream?token=${token}`,
    );

    eventSource.addEventListener("notification", (event) => {
      const payload = JSON.parse(event.data);
      console.log(payload);

      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({
        queryKey: ["notifications", "unreadCount"],
      });
    });

    eventSource.onerror = (err) => {
      console.error("SSE error", err);
      eventSource.close();
    };

    return () => eventSource.close();
  }, [queryClient]);
}
