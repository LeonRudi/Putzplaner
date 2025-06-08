import { NextResponse } from 'next/server';
import { getISOWeek, differenceInCalendarISOWeeks } from 'date-fns';

const personen: string[] = ['Leon', 'Alex', 'Elja'];
const REFERENCE_EPOCH_DATE = new Date(2024, 0, 1);

function getVerantwortliche(currentDate: Date) {
  const continuousWeekIndex = differenceInCalendarISOWeeks(currentDate, REFERENCE_EPOCH_DATE);
  const offset = continuousWeekIndex % personen.length;

  return [
    ...personen.slice(personen.length - offset),
    ...personen.slice(0, personen.length - offset)
  ];
}

export async function GET() {
  const today = new Date();
  const kw = getISOWeek(today); 
  const plan = getVerantwortliche(today);
  return NextResponse.json({ kw, plan });
}