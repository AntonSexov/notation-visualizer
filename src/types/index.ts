import { RawNodeDatum } from "react-d3-tree/lib/types/common";

export interface ImageData {
    src: string;
    alt: string;
}

export interface MyTreeNode {
    val: string;
    isOperator: boolean;
    left: MyTreeNode | undefined;
    right: MyTreeNode | undefined;
    rendered: RawNodeDatum | undefined;
}
