
import React, { FC } from "react";
import { Editor } from "@/app/documents/[documentId]/editor";
import { Toolbar } from "@/app/documents/[documentId]/toolbar";
import { Navbar } from "@/app/documents/[documentId]/navbar";
import { Room } from "./room";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const DocumentIdPage: FC<DocumentIdPageProps> = async ({ params }) => {
    const { documentId } = await params;

    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
                <Navbar/>
                <Toolbar/>
            </div>
            <div className="pt-[114px] print:pt-0">
                <Room>
                    <Editor/>
                </Room>
            </div>
        </div>
    );
};

export default DocumentIdPage;
