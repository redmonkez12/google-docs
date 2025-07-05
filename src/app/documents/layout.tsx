import React, { FC, PropsWithChildren } from "react";
const DocumentsLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="w-full bg-red-500">Document navbar</nav>
            {children}
        </div>
    );
};

export default DocumentsLayout;