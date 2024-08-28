export interface IProduct {
    name: string,
    subName: string | null,
    pros: string[] | null,
    images: String[] | null,
    activeImage?: string,
    hoverImage?: string,
    description: {
        describe: string,
        benefits: string[] | null,
    },
    feature?:string[],
    specifications: {
        horizontalAdjustment: string | null,
        verticalAdjustment: string | null,
        wheel: string | null
    },
    clinicalSegments: {
        segments?: string[],
        fieldOfApplication?: string[]
    },
    document: IDocument[] | null
}

interface IDocument {
    pdfUrl?: string,
    size?: string,
    title?: string
}