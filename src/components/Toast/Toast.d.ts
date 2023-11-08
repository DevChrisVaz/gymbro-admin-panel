import React, { ReactElement } from "react";

export interface IToast {
    type: ToastMapKey;
    title: string;
    message: string;
}

export interface IToastContext {
    toastList: Array<IToast & { uuid: string }>;
    addToast: (toast: IToast) => void;
}

export type ToastMapKey = "success" | "error" | "info" | "warning";

export type ToastMap = {
    [key in ToastMapKey]: {
        colors: {
            background: string;
            text: string;
            border: string;
        };
        icon: ReactElement;
    };
};