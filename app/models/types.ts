export type BlogPost = {
    id: number;
    created_at: string;
    title: string;
    text: string;
  };

  export type Project = {
    id: number,
    created_at: string;
    title: string;
    desc: string;
    gitlink: string;
  };