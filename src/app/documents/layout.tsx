import React, { FC, PropsWithChildren } from "react";
const DocumentsLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-4">
            {children}
        </div>
    );
};

export default DocumentsLayout;