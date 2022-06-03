export interface MatchType {
	readonly id: string;
    readonly players: ReadonlyArray<{
      readonly id: string;
      readonly shortname: string;
    }>;
    readonly winner: {
      readonly id: string;
    };
    readonly startTime: string;
    readonly endTime: string;
}