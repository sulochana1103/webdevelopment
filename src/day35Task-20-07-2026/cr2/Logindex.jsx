function Notifications() {

  const notifications = 5;

  return (
    <div>

      <h1>Dashboard</h1>

      {
        notifications > 0 &&
        <p>You have {notifications} new notifications.</p>
      }

    </div>
  );
}

export default Notifications;