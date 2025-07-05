import React, { FC } from "react";
import { Editor } from "@/app/documents/[documentId]/editor";
import { Toolbar } from "@/app/documents/[documentId]/toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const DocumentIdPage: FC<DocumentIdPageProps> = async ({ params }) => {
    const { documentId } = await params;

    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <Toolbar/>
            <Editor/>
        </div>
    );
};

export default DocumentIdPage;
