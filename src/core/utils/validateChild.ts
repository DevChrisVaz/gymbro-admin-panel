import React, { FC, ReactElement } from "react";


export function validateChild(child: ReactElement, allowedChildren: FC<any>[]): boolean {
    console.log((child.type as any)._payload?.value.name);
    console.log(allowedChildren.map(allowed => allowed.name).join(", "));
    console.log(allowedChildren.find(allowed => allowed.name === (child.type as any)._payload?.value.name)?.name)
    if (React.isValidElement(child)) {
        if(allowedChildren.find(allowed => allowed.name === (child.type as any)._payload?.value.name)) {
            return true;
        }
    }

    throw new Error(`This component can only receive components of type ${allowedChildren.map(allowed => allowed.name).join(", ")} as children.`);
}