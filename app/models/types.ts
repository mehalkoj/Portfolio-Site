export type BlogPost = {
    id: number;
    created_at: string;
    title: string;
    text: string;
  };

  export type Project = {
    id: number;
    created_at: string;
    title: string;
    desc: string;
    gitlink: string;
  };

  export type Experience = {
    id: number;
    created_at: string;
    title: string;
    company: string;
    dates: string;
  };

  export type ExpPoint = {
    id: number;
    company: string;
    sumpoint: string;
  };

