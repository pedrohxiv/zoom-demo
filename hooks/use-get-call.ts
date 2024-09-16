import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCall = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) {
      return;
    }

    (async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id,
        },
      });

      if (calls.length > 0) {
        setCall(calls[0]);
      }

      setIsLoading(false);
    })();
  }, [id, client]);

  return { call, isLoading };
};
