"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, XIcon } from "lucide-react"
import { useSearchParam } from "@/hooks/use-search-param";

export const SearchInput = () => {
    const [search, setSearch] = useSearchParam();
    const [value, setValue] = useState(search);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleClear = () => {
        setValue("");
        setSearch("");
        inputRef.current?.focus();
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(value);
        inputRef.current?.blur();
    }

    return (
        <div className="flex-1 flex items-center justify-center">
            <form className="relative max-w-[720px] w-full" onSubmit={handleSubmit}>
                <Input
                    value={value}
                    onChange={handleChange}
                    ref={inputRef}
                    placeholder="Search"
                    className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,0.3),0_1px_3px_1px_rgba(65,69,73,0.15)] bg-[#f0f4f8] rounded-full h-[48px] focus-visible:ring-0 focus:bg-white"
                />
                <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
                >
                    <SearchIcon />
                </Button>

                {value && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
                    >
                        <XIcon />
                    </Button>
                )}
            </form>
        </div>
    )
}