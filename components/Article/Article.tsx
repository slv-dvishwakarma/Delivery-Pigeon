import classNames from "classnames";
import React, { ReactNode } from "react";

// type SpaceXType = "2x" | "4x" | "6x" | "8x";
// type SpaceYType = "2y" | "4y" | "6y" | "8y";
// type FontType = "xs" | "sm" | "base" | "lg" | "xl";
// type WeightType = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
// type StyleType = "none" | "disc" | "decimal" | "latin" | "auto" | "circle" | "roman";
// type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ArticleProps = {
    children: ReactNode;
    className?: string;
    // spacex?: SpaceXType,
    // spacey?: SpaceYType,
    // font?: FontType,
    // weight?: WeightType,
    // style?: StyleType,
};

// type ArticleSpaceX = Record<SpaceXType, string>;
// type ArticleSpaceY = Record<SpaceYType, string>;
// type ArticleFont = Record<FontType, string>;
// type ArticleWeight = Record<WeightType, string>;
// type ArticleStyle = Record<StyleType, string>;

export const Article = ({
    children,
    className,
    // spacex,
    // spacey = "4y",
    // font = "lg",
    // weight,
    // style,
}: ArticleProps) => {
    // const ARTICLE_X: ArticleSpaceX = {
    //     "2x": "space-x-0.5",
    //     "4x": "space-x-1",
    //     "6x": "space-x-1.5",
    //     "8x": "space-x-2",
    // };
    // const ARTICLE_Y: ArticleSpaceY = {
    //     "2y": "space-y-0.5",
    //     "4y": "space-y-1",
    //     "6y": "space-y-1.5",
    //     "8y": "space-y-2",
    // };
    // const ARTICLE_FONT: ArticleFont = {
    //     "xs" : "text-xs",
    //     "sm" : "text-sm",
    //     "base": "text-base",
    //     "lg": "text-lg",
    //     "xl": "text-xl",
    // };
    // const ARTICLE_WEIGHT: ArticleWeight = {
    //     "thin": "font-thin",
    //     "extralight": "font-extralight",
    //     "light": "font-light",
    //     "normal": "font-normal",
    //     "medium": "font-medium",
    //     "semibold": "font-semibold",
    //     "bold": "font-bold",
    //     "extrabold": "font-extrabold",
    //     "black": "font-black",
    // };
    // const ARTICLE_STYLE: ArticleStyle = {
    //     "none": "list-none",
    //     "disc": "list-disc",
    //     "decimal": "list-decimal",
    //     "latin": "list-[latin]",
    //     "auto": "list-[auto]",
    //     "circle": "list-[circle]",
    //     "roman": "list-[roman]",
    // };

    return (
        <article className={classNames(
            "container pt-[50px] pb-[50px] xl:px-0 lg:px-0 md:px-6 px-6 prose-h3:text-[25px] prose-h3:font-medium prose-h3:mt-3 prose-h3:mb-3 prose-h4:text-[20px] prose-h4:font-medium prose-h4:mt-3 prose-h4:mb-4  prose-p:text-balance prose-p:text-[#000000b8] prose-p:text-lg prose-p:py-4 prose-ul:ml-[35px] prose-li:list-[lower-latin] prose-li:text-[#000000b8] prose-li:text-lg prose-ul:space-y-5 prose-ul:mt-5 prose-ul:mb-5 prose-li:mt-4 prose-li:mb-4",
            className
          )}>
            {children}
        </article>
    );
};
