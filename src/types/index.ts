export interface Project {
    id: string,
    name: string,
    fromDate: string,
    toDate: string,
    company: string,
    technologies: string[],
    image: string,
    description: string,
    appStoreLink?:string,
    googlePlayLink?:string,
    npmLink?:string,
    githubLink?:string
}

export interface ITech {
    id: number;
    name: string;
    icon:string
}