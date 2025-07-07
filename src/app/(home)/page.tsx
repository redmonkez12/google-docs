import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white">
                <Navbar />
            </div>
            <div>
                Click&nbsp;<Link href="/documents/123">
                    <span className="text-blue-500 underline">here</span>
                    &nbsp;to go to document
                </Link>
            </div>
        </div>
    );
};

export default Home;