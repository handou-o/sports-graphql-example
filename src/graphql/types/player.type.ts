export interface PlayerType {
	 id: string;
     shortname: string;
     sex: string;
     firstname: string;
     lastname: string;
     picture: {
       url: string;
    };
     country: {
       picture: {
         url: string;
      };
    };
     stats: {
       rank: number;
       points: number;
       weight: number;
       height: number;
       age: number;
    };
}