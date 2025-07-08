"use client";

import {
    ClientSideSuspense,
    LiveblocksProvider,
    RoomProvider,
  } from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";

export function Room({ children }: PropsWithChildren) {
    const params = useParams();

    return (
        <LiveblocksProvider
            authEndpoint={"/api/liveblocks-auth"}
            throttle={16}
        >
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading...</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}
