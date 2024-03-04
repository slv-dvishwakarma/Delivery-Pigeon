import React, { ReactNode } from "react";
import classNames from "classnames";

type AlignType = "center" | "left" | "right" | "justify" | "start" | "end";
type WrapType = "wrap" | "nowrap" | "balance" | "pretty";
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary";
type FontType = "xl" | "lg" | "xs" | "sm" | "base";
type PaddingType = "py4" | "py3";


export type ParagraphProps = {
    children: ReactNode;
    className?: string;
    align?: AlignType;
    wrap?: WrapType;
    color?: ColorType;
    font?: FontType;
    padding?: PaddingType;
};

type ParagraphAlign = Record<AlignType, string>;
type ParagraphWrap = Record<WrapType, string>;
type ParagraphColor = Record<ColorType, string>;
type ParagraphFont = Record<FontType, string>;
type ParagraphPadding = Record<PaddingType, string>;

export const Paragraph = ({
    children,
    className,
    align,
    wrap,
    color,
    font,
    padding,
}: ParagraphProps) => {
    const ALIGN_TEXT: ParagraphAlign = {
        "center": "text-center",
        "left": "text-left",
        "right": "text-right",
        "justify": "text-justify",
        "start": "text-start",
        "end": "text-end",
    };

    const WRAP_TEXT: ParagraphWrap = {
        "wrap": "text-wrap",
        "nowrap": "text-nowrap",
        "balance": "text-balance",
        "pretty": "text-pretty",
    };
    const COLOR_TEXT: ParagraphColor = {
        "primary": "text-[#000000b8]",
        "secondary": "text-light-black",
        "tertiary": "text-paragraph-color",
        "quaternary": "text-theme-primary",
    };
    const FONT_TEXT: ParagraphFont = {
        "xl": "text-xl",
        "lg": "text-lg",
        "xs": "text-xs",
        "sm": "text-sm",
        "base": "text-base",
    };
    const PADDING_TEXT: ParagraphPadding = {
        "py4": "py-4",
        "py3": "py-3"
    };


    return (
        <p
            className={classNames(
                align && ALIGN_TEXT[align],
                wrap && WRAP_TEXT[wrap],
                color && COLOR_TEXT[color],
                font && FONT_TEXT[font],
                padding && PADDING_TEXT[padding],
                className
            )}
        >
            {children}
        </p>
    );
};

