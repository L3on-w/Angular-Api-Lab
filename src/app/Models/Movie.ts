export interface Movie {
    MovieId: number;
    actor: string;
    title: string;
}

export type PostMovie = Omit<Movie, "MovieId">;