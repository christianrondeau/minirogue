declare namespace NodeJS {
	export interface TermWritableStream extends WritableStream  {
		columns: number;
		rows: number;
	}
}
