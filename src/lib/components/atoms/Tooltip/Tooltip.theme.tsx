import { FlowbiteFloatingTheme } from "../../bosons/Floating";

export type TooltipTheme = FlowbiteFloatingTheme;

export const TOOLTIP_THEME: TooltipTheme = {
    target: 'w-fit',
    base: 'absolute inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm',
    animation: 'transition-opacity',
    hidden: 'invisible opacity-0',
    style: {
        dark: 'bg-gray-900 text-white',
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900'
    },
    content: 'relative z-20',
    arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
            dark: 'bg-gray-900',
            light: 'bg-white',
            auto: 'bg-white'
        },
        placement: '-4px'
    }
};