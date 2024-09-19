import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCalls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { user } = useUser();

  const client = useStreamVideoClient();

  const now = new Date();

  useEffect(() => {
    if (!client || !user?.id) {
      return;
    }

    (async () => {
      const { calls } = await client.queryCalls({
        sort: [
          {
            field: "starts_at",
            direction: -1,
          },
        ],
        filter_conditions: {
          start_at: {
            $exists: true,
          },
          $or: [
            {
              created_by_user_id: user.id,
            },
            {
              members: { $in: [user.id] },
            },
          ],
        },
      });

      if (calls.length > 0) {
        setCalls(calls);
      }

      setIsLoading(false);
    })();
  }, [client]);

  return {
    endedCalls: calls.filter(({ state: { startsAt, endedAt } }) => {
      return (startsAt && new Date(startsAt) < now) || !!endedAt;
    }),
    upcomingCalls: calls.filter(({ state: { startsAt } }) => {
      return startsAt && new Date(startsAt) > now;
    }),
    recordingCalls: calls,
    isLoading,
  };
};
