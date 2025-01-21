import { SelectChangeEvent } from "@mui/material";
import { IDisabled } from "./IDisabled";

export interface ISelectItem {
    value: string;
    label: string;
}

export interface ISelectField extends IDisabled {
    name?: string;
    value?: string;
    label?: string;
    onChange?: (e: SelectChangeEvent) => void
    items: ISelectItem[]
}