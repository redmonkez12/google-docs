import Link from "next/link";

const DocumentsPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            Click&nbsp;<Link href="/documents/123">
            <span className="text-blue-500 underline">here</span>
            &nbsp;to go to document
        </Link>
        </div>
    );
};

export default DocumentsPage;