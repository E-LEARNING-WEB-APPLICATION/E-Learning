import StudentNotificationCard from "@/components/student/notifications/StudentNotificationCard";
import { useMarkNotificationRead } from "@/hooks/useMarkNotificationRead";
import { useNotifications } from "@/hooks/useNotifications";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const typePathMap = {
  COURSE: "course-details",
};

const StudentNotificationsPage = () => {
  const navigate = useNavigate();
  const {
    data: notifications = [],
    isLoading,
    isError,
    error,
  } = useNotifications();

  const { mutate: markRead, isPending } = useMarkNotificationRead();

  if (isLoading) {
    return <div className="text-muted">Loading notifications…</div>;
  }

  if (isError) {
    return (
      <div className="text-danger text-center mt-4">
        {toast.error(error.message)}
        Failed to load notifications
      </div>
    );
  }

  const markAsRead = (id, subject, subjectType) => {
    // call API: PATCH /notifications/{id}/read
    // then navigate
    markRead(id, {
      onSuccess: () => {
        toast.success("notification marked unread");
        console.log(subject);
        console.log(subjectType);
        if (subjectType && typePathMap[subjectType]) {
          navigate(`student/${typePathMap[subjectType]}`, {
            state: { courseId: subject },
          });
        }
      },
    });
  };

  return (
    <div className="container py-3">
      <h5 className="mb-3">Notifications</h5>

      {notifications.length === 0 && (
        <div className="text-muted text-center mt-5">
          No notifications yet 🎉
        </div>
      )}

      {notifications.map((n) => (
        <StudentNotificationCard
          key={n.id}
          notification={n}
          onRead={markAsRead}
          disabled={isPending}
        />
      ))}
    </div>
  );
};

export default StudentNotificationsPage;
