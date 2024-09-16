"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Modal } from "@/components/modal";

export const Cards = () => {
  const [meeting, setMeeting] = useState<
    "isSchedule" | "isJoining" | "isInstant" | undefined
  >();

  const router = useRouter();

  const createMeeting = () => {};

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
