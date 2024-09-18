"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export const EndCallButton = () => {
  const { useLocalParticipant } = useCallStateHooks();

  const call = useCall();
  const router = useRouter();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdAt &&
    localParticipant.userId === call.state.createdBy?.id;

  const handleClick = async () => {
    if (!isMeetingOwner) {
      return;
    }

    await call.endCall();

    router.push("/");
  };

  if (!isMeetingOwner) {
    return null;
  }

  return (
    <Button onClick={handleClick} className="bg-red-500">
      End call for everyone
    </Button>
  );
};
