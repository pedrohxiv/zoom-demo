"use client";

import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import { Modal } from "@/components/modal";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Cards = () => {
  const [callDetails, setCallDetails] = useState<Call>();
  const [meeting, setMeeting] = useState<
    "isSchedule" | "isJoining" | "isInstant" | undefined
  >();
  const [values, setValues] = useState<{
    dateTime: Date;
    description: string;
    link: string;
  }>({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const { toast } = useToast();

  const client = useStreamVideoClient();
  const router = useRouter();

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  const createMeeting = async () => {
    try {
      if (!client || !values.dateTime) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }

      const call = client.call("default", crypto.randomUUID());

      await call.getOrCreate({
        data: {
          starts_at:
            values.dateTime.toISOString() || new Date(Date.now()).toISOString(),
          custom: {
            description: values.description || "Instant meeting",
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
    } catch (error) {
      console.error(error);

      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="bg-[#FF742E] px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer"
        onClick={() => setMeeting("isInstant")}
      >
        <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
          <Image
            src="/icons/add-meeting.svg"
            height={27}
            width={27}
            alt="Add meeting"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">New Meeting</h1>
          <p className="text-lg font-normal">Start an instant meeting</p>
        </div>
      </div>
      <div
        className="bg-[#0E78F9] px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer"
        onClick={() => setMeeting("isJoining")}
      >
        <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
          <Image
            src="/icons/join-meeting.svg"
            height={27}
            width={27}
            alt="Join meeting"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Join Meeting</h1>
          <p className="text-lg font-normal">Via invitation link</p>
        </div>
      </div>
      <div
        className="bg-[#830EF9] px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer"
        onClick={() => setMeeting("isSchedule")}
      >
        <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
          <Image
            src="/icons/schedule.svg"
            height={27}
            width={27}
            alt="Schedule"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Schedule Meeting</h1>
          <p className="text-lg font-normal">Plan your meeting</p>
        </div>
      </div>
      <div
        className="bg-[#F9A90E] px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer"
        onClick={() => router.push("/recordings")}
      >
        <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
          <Image
            src="/icons/recordings.svg"
            height={27}
            width={27}
            alt="Recordings"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">View Recordings</h1>
          <p className="text-lg font-normal">Meeting recordings</p>
        </div>
      </div>
      {!callDetails ? (
        <Modal
          isOpen={meeting === "isSchedule"}
          onClose={() => setMeeting(undefined)}
          title="Schedule Meeting"
          text="Schedule"
          onClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-[#ECF0FF]">
              Add a description
            </label>
            <Textarea
              className="border-none bg-[#252A41] focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-[#ECF0FF]">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-[#252A41] p-2 focus:outline-none"
            />
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={meeting === "isSchedule"}
          onClose={() => setMeeting(undefined)}
          title="Meeting Created"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied" });
          }}
          image="/icons/checked.svg"
          icon="/icons/copy.svg"
          className="text-center"
          text="Copy Meeting Link"
        />
      )}
      <Modal
        isOpen={meeting === "isInstant"}
        onClose={() => setMeeting(undefined)}
        title="Start an instant meeting"
        className="text-center"
        onClick={createMeeting}
        text="Start Meeting"
      />
    </section>
  );
};
