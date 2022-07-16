export interface Transaction {
    id?: number;
    type: string;
    amount: number;
    desc: string
}
// ##########
// ##########
// ##########





export interface OverViewComponentProps {
    expense: number;
    income: number;
    addTransaction: (formValue: Transaction) => void
}
// ##########
// ##########
// ##########





export interface TransActionFormProps {
    addTransaction: (formValue: Transaction) => void;
    showHideFormHandler: (value: boolean) => void;
}
// ##########
// ##########
// ##########





export interface TransActionsListProps {
    transactions: Transaction[]
}
// ##########
// ##########
// ##########