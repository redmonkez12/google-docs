"use client";

import { AlertTriangleIcon } from "lucide-react";

export default function Error() {
    return (
        <div className="min-h-screen flex items-center justify-center space-y-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-rose-100 p-3 rounded-full">
                    <AlertTriangleIcon className="size-10 text-rose-600"/>
                </div>
              </div>
            </div>
        </div>
    )
}
