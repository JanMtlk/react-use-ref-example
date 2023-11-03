import React, { useRef } from 'react'

function ButtonTooltip({ tooltipText, children }: { tooltipText: string, children: React.ReactNode }) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleMouseEnter = () => {
        if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.position = 'absolute';
            tooltip.style.left = buttonRect.left + 'px';
            tooltip.style.top = buttonRect.bottom + 'px';
            document.body.appendChild(tooltip);
        }
    };

    const handleMouseLeave = () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            document.body.removeChild(tooltip);
        }
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>

    );
};

export default ButtonTooltip