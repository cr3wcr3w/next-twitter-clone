'use client';

import { type ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/shared/_shacdn/ui/tooltip';

export default function TooltipWrapper({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
