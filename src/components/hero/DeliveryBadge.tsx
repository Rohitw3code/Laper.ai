import React from 'react';
import { Timer } from 'lucide-react';

const deliveryMessages = [
  "2-Day Express Delivery 🚀",
  "Lightning Fast Turnaround ⚡",
  "48-Hour Completion Time ⏰",
  "Rapid Development Cycle 🔄"
];

export default function DeliveryBadge() {
  const [message, setMessage] = React.useState(deliveryMessages[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessage(prev => {
        const currentIndex = deliveryMessages.indexOf(prev);
        return deliveryMessages[(currentIndex + 1) % deliveryMessages.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 rounded-full mb-8 backdrop-blur-sm border border-purple-500/20 animate-bounce-slow">
      <Timer className="w-5 h-5 text-purple-400 mr-2" />
      <span className="text-purple-300">{message}</span>
    </div>
  );
}