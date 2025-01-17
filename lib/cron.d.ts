// TypeScript Version: 3.5.2
import * as moment from "moment";

interface CronJobOptions {
	cronTime: string | Date | CronTime;
	onTick: () => void;
	onComplete?: () => void;
	startNow?: boolean;
	timeZone?: string;
	context?: any;
	runOnInit?: boolean;
	utcOffset?: number;
	unrefTimeout?: any;
}

interface CronTimeOptions {
	time: string | Date;
	zone?: string;
	utcOffset?: number;
}

/* CronJob(
	cronTime,
	onTick,
	onComplete,
	startNow,
	timeZone,
	context,
	runOnInit,
	utcOffset,
	unrefTimeout
) */
export declare function job<T>(
	cronTime: string | Date | CronTime,
	onTick: () => void,
	onComplete?: () => void,
	startNow?: boolean,
	timeZone?: string,
	context?: any,
	runOnInit?: boolean,
	utcOffset?: number,
	unrefTimeout?: any): T;
export declare function time<T>(cronTime: string | Date, timeZone: string): T;
export declare function sendAt<T>(cronTime: string | Date): T;
export declare function timeout<T>(cronTime: string | Date): T;

declare class CronTime {
	constructor(time: string | Date, zone?: string, utcOffset?: number);

	_verifyParse(): void;

	sendAt<T>(i: number): T;

	getTimeout(): void;

	toString(): void;

	toJSON(): void;

	_getNextDateFrom(start: string | Date, zone: string): void;

	_findDST(date: string | Date): void;

	_wcOrAll(type: number): void;

	_hasAll(type: number): void;

	_parse(): void;

	_parseField(field: string, type: number, constraints: number[]): void;


}

declare class CronJob {
	constructor(
		cronTime: string | Date | CronTime,
		onTick: () => void,
		onComplete?: () => void,
		startNow?: boolean,
		timeZone?: string,
		context?: any,
		runOnInit?: boolean,
		utcOffset?: number,
		unrefTimeout?: any,
	);

	constructor(CronJobOptions: CronJobOptions);

	addCallback(): void;

	setTime(time: string | CronTime): void;

	nextDate(): moment.Moment;

	fireOnTick(): void;

	start(): void;

	lastDate(): moment.Moment;

	stop(): void;

}

export { CronJob, CronTime };
