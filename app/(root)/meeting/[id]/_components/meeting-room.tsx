import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutList, Loader2, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { EndCallButton } from "./end-call-button";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

export const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState<boolean>(false);

  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();
  const searchParams = useSearchParams();

  if (callingState !== CallingState.JOINED) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loader2 className="size-8 animate-spin" />
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          {layout === "grid" && <PaginatedGridLayout />}
          {layout === "speaker-left" && (
            <SpeakerLayout participantsBarPosition="left" />
          )}
          {layout === "speaker-right" && (
            <SpeakerLayout participantsBarPosition="right" />
          )}
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "w-full max-w-[350px] block animate-accordion-up": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls />
        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232D] px-4 py-2 hover:bg-[#4C535B]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-[#1C1F2E] bg-[#1C1F2E] text-white">
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item) => (
              <div key={item}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() =>
                    setLayout(item.toLowerCase() as CallLayoutType)
                  }
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-[#1C1F2E]" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232D] px-4 py-2 hover:bg-[#4C535B]">
            <Users className="size-5 text-white" />
          </div>
        </button>
        {!!!searchParams.get("personal") && <EndCallButton />}
      </div>
    </section>
  );
};
