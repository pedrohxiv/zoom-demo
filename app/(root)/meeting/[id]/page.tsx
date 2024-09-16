"use client";

import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { useGetCall } from "@/hooks/use-get-call";

import { MeetingRoom } from "./_components/meeting-room";
import { MeetingSetup } from "./_components/meeting-setup";

interface Props {
  params: { id: string };
}

const MeetingPage = ({ params }: Props) => {
  const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);

  const { isLoaded } = useUser();
  const { call, isLoading } = useGetCall(params.id);

  if (!isLoaded || isLoading) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <Loader2 className="size-8 animate-spin" />
      </main>
    );
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupCompleted ? <MeetingSetup /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
