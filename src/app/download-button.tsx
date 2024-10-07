"use client";
import React from "react";
import { DownloadCloudIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DownloadButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 h-16 w-16 rounded-full border-2 bg-transparent backdrop-blur-sm"
          onClick={() => window.open("/boqian-resume.pdf")}
        >
          <DownloadCloudIcon size="48" role="link" href="/boqian-resume.pdf" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Download PDF version</TooltipContent>
    </Tooltip>
  );
};

export default DownloadButton;
