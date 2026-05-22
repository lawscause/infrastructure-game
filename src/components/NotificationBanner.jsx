export default function NotificationBanner({ notification }) {
  if (!notification) return null
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500 text-black',
  }
  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium shadow-lg ${colors[notification.type] || colors.info}`}>
      {notification.message}
    </div>
  )
}
