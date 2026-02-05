import { WifiOff, Wifi } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-accent text-accent-foreground py-2 px-4"
        >
          <div className="container flex items-center justify-center gap-2 text-sm">
            <WifiOff className="w-4 h-4" />
            <span>You're offline. Some features may be limited.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function OnlineIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {isOnline ? (
        <>
          <Wifi className="w-3 h-3 text-primary" />
          <span>Online</span>
        </>
      ) : (
        <>
          <WifiOff className="w-3 h-3 text-accent" />
          <span>Offline</span>
        </>
      )}
    </div>
  );
}
