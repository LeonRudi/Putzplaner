import { NextResponse } from 'next/server';
import { getISOWeek, differenceInCalendarISOWeeks, subDays, format } from 'date-fns';
import { de } from 'date-fns/locale';

const personen: string[] = ['Leon', 'Alex', 'Elja'];
const REFERENCE_EPOCH_DATE = new Date(2024, 0, 1);

function getVerantwortliche(currentDate: Date) {
  const adjusted = subDays(currentDate, 4);
  const continuousWeekIndex = differenceInCalendarISOWeeks(adjusted, REFERENCE_EPOCH_DATE);
  const offset = continuousWeekIndex % personen.length;

  return [
    ...personen.slice(personen.length - offset),
    ...personen.slice(0, personen.length - offset)
  ];
}

export async function GET() {
  const currentDate = new Date();
  const formatted = format(currentDate, "d. MMMM yyyy, HH:mm 'Uhr.'", { locale: de });

  console.info('[API] GET /api/putzplan aufgerufen am', formatted);
  const today = new Date();
  const kw = getISOWeek(today); 
  const plan = getVerantwortliche(today);
  console.debug('[API] Ergebnis - KW:', kw);
  console.debug('[API] Ergebnis -', plan);
  return NextResponse.json({ kw, plan });
}