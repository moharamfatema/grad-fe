export interface IPath {
    name: string;
    path: string;
    component: React.FC;
    exact?: boolean;
}
