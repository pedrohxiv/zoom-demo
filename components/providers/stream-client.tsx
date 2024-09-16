"use client";

import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

import { tokenProvider } from "@/actions/stream";

interface Props {
  children: React.ReactNode;
}

export const StreamClient = ({ children }: Props) => {
  const [client, setClient] = useState<StreamVideoClient>();

  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) {
      return;
    }

    const streamVideoClient = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      user: {
        id: user.id,
        name: user.username || user.id,
        image: user.imageUrl,
      },
      tokenProvider,
    });

    setClient(streamVideoClient);
  }, [isLoaded, user]);

  if (!client) {
    return;
  }

  return <StreamVideo client={client}>{children}</StreamVideo>;
};
