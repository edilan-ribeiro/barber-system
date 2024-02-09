import { addMinutes, format, isAfter, setHours, setMinutes } from 'date-fns'

export function generateDayTimeList(date: Date): string[] {
	const currentTime = addMinutes(new Date(), 60)//avoids the booking to be placed too close by the customer
	const startTime = setMinutes(setHours(date, 9), 0) //set initial time to 9:00
	const endTime = setMinutes(setHours(date, 17), 0) //set final time to 17:00 so shops can close with the final booking
	const interval = 45 //interval in minutes
	const timeList: string[] = [] //holds all possible booking times

	let nextAvaiableTime = startTime

	while (nextAvaiableTime < endTime) {
		if (isAfter(nextAvaiableTime, currentTime)) {
			//  checks if the booking times are after the current time
			timeList.push(format(nextAvaiableTime, 'HH:mm'))
		}
		nextAvaiableTime = addMinutes(nextAvaiableTime, interval)
	}

	return timeList
}
