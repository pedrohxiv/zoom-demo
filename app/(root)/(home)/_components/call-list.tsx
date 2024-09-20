"use client";

import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useGetCalls } from "@/hooks/use-get-calls";
import { useToast } from "@/hooks/use-toast";
import { avatarImages } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Props {
  type: "ended" | "upcoming" | "recordings";
}

export const CallList = ({ type }: Props) => {
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const { endedCalls, upcomingCalls, recordingCalls, isLoading } =
    useGetCalls();
  const { toast } = useToast();

  const router = useRouter();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "recordings":
        return "No Recordings";
      case "upcoming":
        return "No Upcoming Calls";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (type === "recordings") {
      (async () => {
        const data = await Promise.all(
          recordingCalls.map((recordingCall) =>
            recordingCall.queryRecordings()
          ) ?? []
        );

        const recordings = data
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      })();
    }
  }, [type, recordingCalls]);

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-250px)] flex items-center justify-center">
        <Loader2 className="size-5 animate-spin" />
      </div>
    );
  }

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <section
            key={(meeting as Call).id}
            className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-[#1C1F2E] px-5 py-8 xl:max-w-[568px]"
          >
            <article className="flex flex-col gap-5">
              <Image
                src={
                  type === "ended"
                    ? "/icons/previous.svg"
                    : type === "upcoming"
                    ? "/icons/upcoming.svg"
                    : "/icons/recordings.svg"
                }
                height={28}
                width={28}
                alt="call"
              />
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">
                    {(meeting as Call).state?.custom?.description ||
                      (meeting as CallRecording).filename?.substring(0, 20) ||
                      "No Description"}
                  </h1>
                  <p className="text-base font-normal">
                    {(meeting as Call).state?.startsAt?.toLocaleString() ||
                      (meeting as CallRecording).start_time?.toLocaleString()}
                  </p>
                </div>
              </div>
            </article>
            <article className="flex justify-center relative">
              <div className="relative flex w-full max-sm:hidden">
                {avatarImages.map((img, index) => (
                  <Image
                    key={img}
                    src={img}
                    height={40}
                    width={40}
                    alt="avatar image"
                    className={cn("rounded-full", { absolute: index > 0 })}
                    style={{ top: 0, left: index * 28 }}
                  />
                ))}
                <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-[#252A41] bg-[#1E2757]">
                  +5
                </div>
              </div>
              {!(type === "ended") && (
                <div className="flex gap-2">
                  <Button
                    onClick={
                      type === "recordings"
                        ? () => router.push(`${(meeting as CallRecording).url}`)
                        : () => router.push(`/meeting/${(meeting as Call).id}`)
                    }
                    className="rounded bg-[#0E78F9] px-6"
                  >
                    {type === "recordings" && (
                      <Image
                        src="/icons/play.svg"
                        height={20}
                        width={20}
                        alt="play"
                      />
                    )}
                    &nbsp; {type === "recordings" ? "Play" : "Start"}
                  </Button>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        type === "recordings"
                          ? (meeting as CallRecording).url
                          : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                              (meeting as Call).id
                            }`
                      );
                      toast({
                        title: "Link Copied",
                      });
                    }}
                    className="bg-[#1E2757] px-6"
                  >
                    <Image
                      src="/icons/copy.svg"
                      alt="feature"
                      width={20}
                      height={20}
                    />
                    &nbsp; Copy Link
                  </Button>
                </div>
              )}
            </article>
          </section>
        ))
      ) : (
        <h1 className="text-2xl font-bold text-white">{noCallsMessage}</h1>
      )}
    </div>
  );
};
