import { GridBox } from '@/components/GridBox';
import { useState } from 'react';

interface TimeOption {
    label: string;
    value: string;
}

const PickupForm = () => {

    const arr = [{
        label: "09:00 - 09:30 AM",
        value: "09:00"
    },
    {
        label: "09:30 - 10:00 AM",
        value: "09:30"
    },
    {
        label: "10:00 - 10:30 AM",
        value: "10:00"
    },
    {
        label: "10:30 - 11:00 AM",
        value: "10:30"
    },
    {
        label: "11:00 - 11:30 AM",
        value: "11:00"
    },
    {
        label: "11:30 - 12:00 PM",
        value: "11:30"
    },
    {
        label: "12:00 - 12:30 PM",
        value: "12:00"
    },
    {
        label: "12:30 - 01:00 PM",
        value: "12:30"
    },
    {
        label: "01:00 - 01:30 PM",
        value: "13:00"
    },
    {
        label: "01:30 - 02:00 PM",
        value: "13:30"
    },
    {
        label: "02:00 - 02:30 PM",
        value: "14:00"
    },
    {
        label: "02:30 - 03:00 PM",
        value: "14:30"
    },
    {
        label: "03:00 - 03:30 PM",
        value: "15:00"
    },
    {
        label: "03:30 - 04:00 PM",
        value: "15:30"
    },
    {
        label: "04:00 - 04:30 PM",
        value: "16:00"
    },
    {
        label: "04:30 - 05:00 PM",
        value: "16:30"
    },
    {
        label: "05:00 - 05:30 PM",
        value: "17:00"
    },
    {
        label: "05:30 - 06:00 PM",
        value: "17:30"
    },
    {
        label: "06:00 - 06:30 PM",
        value: "18:00"
    },
    {
        label: "06:30 - 07:00 PM",
        value: "18:30"
    },
    {
        label: "07:00 - 07:30 PM",
        value: "19:00"
    },
    {
        label: "07:30 - 08:00 PM",
        value: "19:30"
    }]

    const [selectedDay, setSelectedDay] = useState('');
    const [pickupTimes, setPickupTimes] = useState<TimeOption[]>([]);

    const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDay = e.target.value;
        setSelectedDay(selectedDay);
        if (selectedDay === 'Today') {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            const currentTotalMinutes = currentHour * 60 + currentMinute;
            const filteredTimes = arr.filter(time => {
                const timeParts = time.value.split(':');
                const timeHour = parseInt(timeParts[0]);
                const timeMinute = parseInt(timeParts[1]);
                const timeTotalMinutes = timeHour * 60 + timeMinute;
                return timeTotalMinutes >= currentTotalMinutes;
            });
            setPickupTimes(filteredTimes);
        } 
        else if (selectedDay === 'Tomorrow') {
            const tomorrowTimes: TimeOption[] = arr.map(time => ({
                label: time.label,
                value: time.value.substring(0, 5)
            }));
            setPickupTimes(tomorrowTimes);
        }

    };

    return (
        <GridBox columns={2} gap={5} className='mt-3'>
            <GridBox.GridItem columnMerge={1} className="input-group">
                <select className="form-control w-full h-[calc(46px_+_2px)] text-base leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 rounded-lg border-solid border-[#ced4da]" id="pickupDate" name="pickupDate" value={selectedDay} onChange={handleDayChange}>
                    <option value="">Please select day</option>
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                </select>
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={1} className="form-group">
                <select className="form-control w-full h-[calc(46px_+_2px)] text-base leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 rounded-lg border-solid border-[#ced4da]" id="pickupTime" name="pickupTime">
                    {pickupTimes.map((time, index) => (
                        <option key={index} value={time.value}>{time.label}</option>
                    ))}
                </select>
            </GridBox.GridItem>
        </GridBox>
    );
};

export default PickupForm;
