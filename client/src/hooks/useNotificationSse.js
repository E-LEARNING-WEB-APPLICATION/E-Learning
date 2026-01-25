import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { API_BASE_PATH, API_URL } from "@/utils/apiClient";

export function useNotificationSSE() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const eventSource = new EventSource(
      `${API_URL}${API_BASE_PATH}/notifications/stream?token=${localStorage.getItem("token")}`,
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
