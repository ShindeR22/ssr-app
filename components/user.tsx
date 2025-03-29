"use client";
import { users } from "@/lib/atoms/user";
import { useAtomValue } from "jotai";
import { useRef, useCallback } from "react";
import UserCard from "./userCard";

export default function UserPage() {
        const { data, fetchNextPage, hasNextPage, isPending, isError, isFetching } = useAtomValue(users);
        const observerRef = useRef<IntersectionObserver | null>(null);

        // Intersection Observer callback to load more data when the last item is visible
        const lastUserElementRef = useCallback(
                (node: HTMLDivElement | null) => {
                        if (isPending || isFetching) return;
                        if (observerRef.current) observerRef.current.disconnect();

                        observerRef.current = new IntersectionObserver((entries) => {
                                if (entries[0].isIntersecting && hasNextPage) {
                                        fetchNextPage();
                                }
                        });

                        if (node) observerRef.current.observe(node);
                },
                [fetchNextPage, hasNextPage, isPending, isFetching]
        );

        if (isPending && !data) return <div>Loading...</div>;
        if (isError) return <div>Error loading users</div>;

        return (
                <div>
                        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4/5 mx-auto">
                                {data?.pages.map((page, pageIndex) =>
                                        page.users.map((user, userIndex) => {
                                                const isLastElement =
                                                        pageIndex === data.pages.length - 1 &&
                                                        userIndex === page.users.length - 1;

                                                return (
                                                        <div
                                                                key={user.id}
                                                                ref={isLastElement ? lastUserElementRef : null}
                                                        >
                                                                <UserCard post={user} />
                                                        </div>
                                                );
                                        })
                                )}
                        </main>

                        {(isFetching || isPending) && (
                                <div className="text-center p-4">
                                        <p>Loading more users...</p>
                                </div>
                        )}
                </div>
        );
}
