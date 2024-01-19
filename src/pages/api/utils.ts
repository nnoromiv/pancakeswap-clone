export type dataSet = {
    x: number,
    y: number
}[]

export const chartData : { [key: string] : any} = {
    'day': ["1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM","12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM"],
    'week': ["1PM","6PM","11AM","4AM","9AM","2PM","7PM","12PM","5AM","10AM","3PM","8PM","1AM","6AM","11AM","4PM","9PM","2AM","7AM","12AM","5PM","10PM","3AM","8AM","1PM","6PM","11PM","4AM","9AM","2PM","7PM","12AM","5AM","10AM"],
    'month': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,30],
    'year': ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"],
}

export const timeUnitInMs = {
    hour: 3600000,
    day: 3600000 * 24,
    week: 3600000 * 24 * 7,
    year:  3600000 * 24 * 365,
    averageMonth: (3600000 * 24 * 365) / 12 
}


export function randomNumber(value : number, range = Math.random()) {
    value += Math.random()*range - (range/2)
    return value
}

export function randomData(timeRange = 0, timeUnit = 0){
    let dataSet : dataSet = []
    let current = Math.random()
    let numberOfValues = timeRange / timeUnit

    for(let i = 0; i < numberOfValues; i++){
        let value = dataSet[0] ? dataSet[0].y : current
        do {
            value = randomNumber(value, 2)
        } while(value < 0) {
            dataSet.unshift({
                x: (Date.now() - (timeUnit*i)),
                y: value
            })
        }
    }

    return dataSet
}

export function dataOnTimeRange(dataSet : dataSet, time = 'day'){
    if(!chartData[time][0]) {
        let timeSpan = 1
        let dataRange;
        
        switch(time) {
            case 'day':
                dataRange = timeUnitInMs.day / timeUnitInMs.hour;
                timeSpan = 1
                break;
            case 'week':
                dataRange = timeUnitInMs.week / timeUnitInMs.hour;
                timeSpan = 6
                break
            case 'month':
                dataRange = Math.ceil(timeUnitInMs.averageMonth / timeUnitInMs.hour);
                timeSpan = 24
                break
            case 'year':
                dataRange = timeUnitInMs.year / timeUnitInMs.hour;
                timeSpan = 24 * 15
                break
            default: 
                dataRange = timeUnitInMs.day / timeUnitInMs.hour;
                timeSpan = 1
                break
        }

        for(let i =0; i < dataSet.slice(-dataRange).length; i+=timeSpan){
            chartData[time].push(dataSet.slice(-dataRange)[i])
        }
    }
}

export function redOrGreen(previous: number, next: number, opacity = 1) {
    let color = 'grey'
    if(previous) {
        color = (previous > next) ? `rgba(237,75,158, ${opacity})` : `rgba(49,208,170, ${opacity})`
    }

    return color
}

export function redOrGreenGradient(previous: number, next: number, opacityX = 1, opacityY = 0){
    const chartElement = <HTMLCanvasElement>document.getElementById('graph');
    let gradient;
    if (chartElement !== null) {
        gradient = chartElement.getContext("2d")?.createLinearGradient(0,0,0,300)
        gradient?.addColorStop(0,redOrGreen(previous, next, opacityX))
        gradient?.addColorStop(1,redOrGreen(previous, next, opacityY))
    }

    return gradient
}

export function minValue(data: {y: number} []) : number {
    return Math.min(...data.map(obj => obj.y))
}

export function maxValue(data: {y: number} []) : number {
    return Math.max(...data.map(obj => obj.y))
}

export function valueRanges(data: { y: number }[]): number {
    const min = minValue(data);
    const max = maxValue(data);
    return max - min;
}

export function date() {
    const date = new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    return date.toString()
}