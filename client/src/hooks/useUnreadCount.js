import { useQuery } from "@tanstack/react-query";
import { fetchUnreadCount } from "@/services/admin/notification";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

export function useUnreadCount() {
  const prevCountRef = useRef(null);

  const query = useQuery({
    queryKey: ["notifications", "unreadCount"],
    queryFn: fetchUnreadCount,
    staleTime: 30_000,
  });

  const newCount = query.data;

  useEffect(() => {
    if (newCount == null) return;

    const prevCount = prevCountRef.current;

    // Skip toast on first load
    if (prevCount !== null && newCount > prevCount) {
      const diff = newCount - prevCount;
      toast.success(
        diff === 1 ? "1 new notification" : `${diff} new notifications`,
      );
    }

    prevCountRef.current = newCount;
  }, [newCount]);

  return query;
}
