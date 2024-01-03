interface NotificationProps {
  message: String;
}

export const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <p className="  text-center text-5xl font-bold text-darkFont mt-36 md:text-4xl">
      {message}
    </p>
  );
};
