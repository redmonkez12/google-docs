import React, { FC } from "react";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const DocumentIdPage: FC<DocumentIdPageProps> = async ({ params }) => {
    const { documentId } = await params;

    return (
        <div>
            
        </div>
    );
};

export default DocumentIdPage;
