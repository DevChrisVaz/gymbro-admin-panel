export interface Header {
    id: string | number,
    name: string,
    [propName: string]: any | undefined
}

type TableProps = {
    columns: Header[];
    rows: T[];
}

export type SimpleTableProps = TableProps & {
    linked?: boolean;
}

export type TableRowsProps = {
    rows: T[];
}