export interface Project {
    id: string,
    name: string,
    fromDate: string,
    toDate: string,
    company: string,
    technologies: string[],
    image: string,
    description: string
}

export interface ITech {
    id: number;
    name: string
}