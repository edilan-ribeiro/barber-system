import { addMinutes, format, setHours, setMinutes } from 'date-fns'

export function generateDayTimeList(date: Date): string[] {
	const startTime = setMinutes(setHours(date, 9), 0) //set initial time to 9:00
	const endTime = setMinutes(setHours(date, 21), 0) //set final time to 21:00
	const interval = 45 //interval in minutes
	const timeList: string[] = [] //holds all possible times

	let currentTime = startTime

	while (currentTime < endTime) {
		timeList.push(format(currentTime, 'HH:mm'))
		currentTime = addMinutes(currentTime, interval)
	}

	return timeList
}
