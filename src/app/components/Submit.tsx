"use client"

import { useFormStatus } from "react-dom";

export const Submit = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="block w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600"
            disabled={pending}
        >
            Submit
        </button>
    );
};