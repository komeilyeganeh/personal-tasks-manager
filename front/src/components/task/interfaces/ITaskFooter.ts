export interface ITaskFooter {
    id?: string;
    onStatusChange: (e: React.ChangeEvent<HTMLInputElement>, id?: string) => void;
    status?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>, id?: string) => void;
}