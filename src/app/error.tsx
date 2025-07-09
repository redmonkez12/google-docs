"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="flex justify-center">
                    <div className="bg-rose-100 p-3 rounded-full">
                        <AlertTriangleIcon className="size-10 text-rose-600" />
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Something went wrong
                    </h2>
                    <p className="text-gray-600">{error.message}</p>
                </div>
                <div className="flex items-center gap-x-3 justify-center">
                    <Button
                        onClick={reset}
                        className="font-medium px-6 w-full sm:w-auto"
                    >
                        Try again
                    </Button>
                    <Button
                        asChild
                        variant="ghost"
                        className="font-medium px-6 w-full sm:w-auto"
                    >
                        <Link href="/">
                            Go Back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}