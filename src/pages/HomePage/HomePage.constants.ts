export interface IProject {
  id: string;
  title: string;
  imageUrl: string;
  features: string[];
}

export const PROJECTS: IProject[] = [
  {
    id: "tic-tac-toe",
    title: "ReactDev Tic-Tac-Toe",
    imageUrl: "http://localhost:3845/assets/a5423a060a6ce7eebccbbac9881535f078a6567b.png",
    features: [
      "useState",
      "useEffect",
      "Custom Hooks",
      "localStorage",
      "CSS Modules",
      "otherFeature",
      "otherFeature"
    ]
  },
  {
    id: "poke-collection",
    title: "Poke Collection",
    imageUrl: "http://localhost:3845/assets/5f2fcc9bff4319959cc2d700d6754a2d2203780b.png",
    features: [
      "useState",
      "useEffect",
      "Custom Hooks",
      "localStorage",
      "CSS Modules",
      "otherFeature",
      "otherFeature"
    ]
  },
  {
    id: "react-wordle",
    title: "React Wordle",
    imageUrl: "http://localhost:3845/assets/323e6f9c9090622f65663d39068cde5747babf1f.png",
    features: [
      "useState",
      "useEffect",
      "Custom Hooks",
      "localStorage",
      "CSS Modules",
      "otherFeature",
      "otherFeature"
    ]
  },
  {
    id: "video-feed",
    title: "Video Feed",
    imageUrl: "http://localhost:3845/assets/fba18de3bd5992ad601bfd3d31b7643cd7a78c8d.png",
    features: [
      "useState",
      "useEffect",
      "Custom Hooks",
      "localStorage",
      "CSS Modules",
      "otherFeature",
      "otherFeature"
    ]
  }
];


