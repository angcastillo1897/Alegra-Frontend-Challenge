type BaseSeller = {
    id: number;
    name: string;
}
type Seller = BaseSeller & {
    image: Image | null;
    score: number;
    imagesSelected: Array<Image>;
}

type SellerResponse = BaseSeller & {
    identification: string;
    observations: string;
    status: 'active' | 'inactive';
}

type Image = {
    id: number;
    url: string;
    alt: string;
}

type ImageResponse = Image & {
    avg_color: string;
    height: number;
    width: number;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
}

export type { Seller, SellerResponse, Image, ImageResponse, BaseSeller }