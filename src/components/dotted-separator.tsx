/* eslint-disable @typescript-eslint/no-unused-vars */


interface DottedSeparatorProps {
    className?: string;
    color?: string;
    height?: string;
    dotSize?: string;
    gapSize?: string;
    direction?: "horizontal" | "vertical";
};

import { cn } from '@/lib/utils';
import React from 'react'

export const DottedSeparator = ({
    className,
    color = '#d4d4d8',
    height = '2px',
    dotSize = '2px',
    gapSize = '6px',
    direction = "horizontal",
}: DottedSeparatorProps) => {

    const isHorizontal = direction === "horizontal";

    return (
        <div
            className={isHorizontal ? "flex-grow" : "flex-grow-0"}
            style={{
                width: isHorizontal ? "100%" : height,
                height: isHorizontal ? height : "100%",
                backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
                backgroundSize: isHorizontal
                    ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
                    : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
                backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
                backgroundPosition: "center",
            }}

        >
            <div
                className={cn(
                    isHorizontal ? "flex-grow" : "flex-grow-0",

                )}
            />
        </div>

    )
}


