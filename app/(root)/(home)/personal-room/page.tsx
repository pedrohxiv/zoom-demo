"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useGetCall } from "@/hooks/use-get-call";
import { useToast } from "@/hooks/use-toast";

const PersonalRoomPage = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const { call } = useGetCall(user?.id!);

  const router = useRouter();
  const client = useStreamVideoClient();

  const startRoom = async () => {
    if (!client || !user) {
      return;
    }

    const newCall = client.call("default", user?.id!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${user?.id}?personal=true`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${user?.id}?personal=true`;

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-xl font-bold lg:text-3xl">Personal Meeting Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[1000px]">
        <div className="flex flex-col items-start gap-2 xl:flex-row">
          <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
            Topic:
          </h1>
          <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
            {`${user?.username}'s Meeting Room`}
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 xl:flex-row">
          <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
            Meeting ID:
          </h1>
          <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
            {user?.id}
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 xl:flex-row">
          <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
            Invite Link:
          </h1>
          <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl text-primary">
            {meetingLink}
          </h1>
        </div>
      </div>
      <div className="flex gap-5">
        <Button className="bg-primary" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-[#252A41]"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoomPage;
