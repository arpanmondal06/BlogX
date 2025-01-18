import React from "react";

export default function Button({
    children,
    type = "button",
    textColor = "text-gray-100",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg bg-button hover:bg-button-hover hover:text-white font-vinyl ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}