'use client';

import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '~/shared/_shacdn/ui/button';
import { Calendar } from '~/shared/_shacdn/ui/calendar';
import { Input } from '~/shared/_shacdn/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '~/shared/_shacdn/ui/popover';
import { cn } from '~/shared/_shacdn/utils';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useClickOutside } from '@mantine/hooks';
import LogoX from '~/shared/_icons/logo-x';

export default function SignUp() {
  const [date, setDate] = useState<Date>();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const router = useRouter();

  const ref = useClickOutside(() => {
    // this fix the issue of when the popover calendar is open it doesn't click the date
    if (!calendarOpen) {
      router.push('/');
    }
  });

  return (
    <div className="absolute h-screen w-screen bg-black sm:bg-white/40">
      <div className="flex h-full items-center justify-center">
        <div
          ref={ref}
          className="relative p-4 text-white sm:h-[40.625rem] sm:w-[37.5rem] sm:rounded-lg sm:bg-black"
        >
          <div className="mb-20">
            <Link href="/" className="absolute">
              X
            </Link>

            <div className="flex justify-center">
              <div className="mx-auto w-8">
                <LogoX />
              </div>
            </div>
          </div>

          <div className="mx-auto flex  w-full min-w-[15rem] max-w-[22rem] flex-col">
            <div className="mb-20">
              <h1 className="mb-9 text-2xl sm:text-3xl">Create your account</h1>
              <div>
                <Input type="text" placeholder="Name" className="mb-5" />
                <Input type="email" placeholder="Email" className="mb-9" />
                <div>
                  <p className="mb-2">Date of birth</p>
                  <p className="mb-3 text-sm">
                    This will not be shown publicly. Confirm your own age, even if this account is
                    for a business, a pet, or something else.
                  </p>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div>
              <Button className="w-full">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
