export type team = {
    teamID: number;
    teamName: string;
};

export type Bowler = {
    bowlerID: number;
    bowlerFirstName: string;
    bowlerLastName: string;
    bowlerMiddleInit: string;
    bowlerState: string;
    bowlerCity: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamID: number;
    team: team;  // The associated Team object
};
