import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  image?: string;
  onClick?: () => void;
  text?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  icon,
  image,
  onClick,
  text,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-[#1C1F2E] px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} height={72} width={72} alt="Image" />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-primary focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={onClick}
          >
            {icon && (
              <Image
                src={icon}
                height={13}
                width={13}
                alt="Icon"
                className="mr-2"
              />
            )}
            {text}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
