import { StreamClient } from "@/components/providers/stream-client";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return <StreamClient>{children}</StreamClient>;
};

export default RootLayout;
