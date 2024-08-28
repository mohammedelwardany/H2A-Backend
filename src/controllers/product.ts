import { IProduct } from "interfaces/IProduct";
import Product from "../models/Product";
const productTest: IProduct = {
    name: "5500 Series",
    subName: "Premium Compact Ultrasound System",
    feature: ["Exceptional image quality, supporting PureWave transducers", "Shared UI and streamlined workflow with EPIQ and Affiniti systems", "Transducer interoperability across the Philips portfolio"],
    pros: ["Design and Portability", "Premium image quality", "A versatile range of diagnostic solutions", "Connectivity and collaboration"],
    description: {
        describe: `Bringing complete functionality and supporting fast, confident decision-making wherever you are, the Philips Premium Compact Ultrasound System 5500 series HC795140 is compatible with PureWave transducers for outstanding imaging.
The Philips Ultrasound 5500 models are built into highly mobile, easily reusable, and clean systems. They are ideal for a variety of clinical settings. The models offer a feature-rich core and a versatile range of diagnostic solutions.`,
        benefits: ["Offering first-scan answers that quickly inform and confirm your diagnosis and decrease the need for costly and time-consuming rescans.", "Staying at the cutting edge with upgrades as your needs evolve. Plus, the Compact 5500 series supports PureWave transducers.", "Easily shares DNA – user interfaces, features, touchscreens, and workflow. With standardized workflow comes increased efficiencies, including more exams in less time.", "Collaborating with colleagues or support teams to consult on complex exams, enable standardized care, and access real-time applications and technical expertise at any time.", "Designed for mobility and ideal for multi-site support. It allows you to safely transport the system so you can bring the tools you need to provide care where needed."]
    },
    specifications: {
        horizontalAdjustment: '488.8 mm x 488.8 mm (19.2" x 19.2")',
        verticalAdjustment: '820-1001 mm (32.2"-39.3”)',
        wheel: "Four 5” locking swivel wheels rear two wheels include steering lock mechanism."
    },
    activeImage: "https://s3-alpha-sig.figma.com/img/d152/0a7c/e4320943209aa5b7a523a162a0128666?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kqGnpwZFFu-idUKXeWzVIdx6b3TkdlwYV85Zlv9ocsgMpQvw~EDqgLFLqaaxXQbSj7LHvvb~1ir2Nr-whup6Kts3EbCC1g-abwiRNhSpnzwObnWt7ytHgOjrStVis4-XnAZ0WzeYlc5FfZMTHN5gIUHFfIb3ItfABJB8OV6Mvn3jHIzAUUVK3SQtjFfogbbyenRqFAm1rW4Txan5MeDFWsT~H~~ID~4exAUMA2n4WRW~p~~Io8TCzUUNcfH7u9f8RxON0Rrs1qXl8REVwCIU31buv02BtIraxLqGHRjVPaMrVQOmTxhjr-sUBadB0tw2S-t0t42b8t~-x36ZLx2YBw__",
    hoverImage: "https://s3-alpha-sig.figma.com/img/f5a0/b30c/c37da2a208584253813a601faa70625d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnMscBSEPiXqlT6ct0nB-v4kmnpAjtX8JhfC07-sBX-9LDqlTvmSJmem5nZjBlq3-SrVbFMOYERRnqRxmNqi4yci5RO1IO-dSKwWw~n7462YultpgEg82nNBvJimBB8vP0kp9Jh9bE4F3QJpjhJBabs0cGA0geAO4GYVUxZezDYNYY0Ecf88XjD5nLe2vhN4IAnLJ6Pl3pyA3t4WDS9wYqA6BzkLb~OEoBJtpLHQJco5gfQfyka4V3lPAht9ESjFhlavHaQ8bLf0VLk6WIjSijq7cfWKwhQTx0wTWuIXwkby1YIDQz9F7RZSMwZ-9l0V6su~1iIHxNZ2I~qY7AqvJg__",
    clinicalSegments: {
        segments: ["Abdomen and Liver", "Critical Care", "Emergency Medicine", "Musculoskeletal", "Pediatrics", "Regional Anesthesia and Pain Medicine", "Thyroid and Testes (Small Parts)", "Vascular"],
        fieldOfApplication: ["General Imaging", "Obstetrics and Gynecology", "Point of Care"]
    },
    document: [{
        pdfUrl: "https://www.documents.philips.com/assets/20221121/af1ce7a0b8d8485ebcb7af54016673b5.pdf?_ga=2.6024307.1111320000.1719655724-2109803076.1716781368",
        size: "3.9",
        title: "Philips Compact Ultrasound System 5000 series for Ob/Gyn"
    }],
    images: ["https://s3-alpha-sig.figma.com/img/d152/0a7c/e4320943209aa5b7a523a162a0128666?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kqGnpwZFFu-idUKXeWzVIdx6b3TkdlwYV85Zlv9ocsgMpQvw~EDqgLFLqaaxXQbSj7LHvvb~1ir2Nr-whup6Kts3EbCC1g-abwiRNhSpnzwObnWt7ytHgOjrStVis4-XnAZ0WzeYlc5FfZMTHN5gIUHFfIb3ItfABJB8OV6Mvn3jHIzAUUVK3SQtjFfogbbyenRqFAm1rW4Txan5MeDFWsT~H~~ID~4exAUMA2n4WRW~p~~Io8TCzUUNcfH7u9f8RxON0Rrs1qXl8REVwCIU31buv02BtIraxLqGHRjVPaMrVQOmTxhjr-sUBadB0tw2S-t0t42b8t~-x36ZLx2YBw__", "https://s3-alpha-sig.figma.com/img/f5a0/b30c/c37da2a208584253813a601faa70625d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnMscBSEPiXqlT6ct0nB-v4kmnpAjtX8JhfC07-sBX-9LDqlTvmSJmem5nZjBlq3-SrVbFMOYERRnqRxmNqi4yci5RO1IO-dSKwWw~n7462YultpgEg82nNBvJimBB8vP0kp9Jh9bE4F3QJpjhJBabs0cGA0geAO4GYVUxZezDYNYY0Ecf88XjD5nLe2vhN4IAnLJ6Pl3pyA3t4WDS9wYqA6BzkLb~OEoBJtpLHQJco5gfQfyka4V3lPAht9ESjFhlavHaQ8bLf0VLk6WIjSijq7cfWKwhQTx0wTWuIXwkby1YIDQz9F7RZSMwZ-9l0V6su~1iIHxNZ2I~qY7AqvJg__", "https://s3-alpha-sig.figma.com/img/d2ed/43b7/c36392879b2712a1221ee9ca22f80769?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TyYSFFKkBuEkPbHap-NsgDumbAMPnioPCkAusEDbN41kkWuMR6Bt2OHXsBQ-ZfmM-kyq29Qce0kXFTw~Hm9xF~IF5ozlRWMwI33pS3QTvRP0WnbqN5cAfuKBCxn2uZppAgVDwG7-brJvCa~vYRmJIpUTFlks6vrGujvza6vzUmo3nCqTaoGNvN44BQjGmVjL6FN-9K2iJxuB-MtABQXo8aAV8Gq7b~KjrMK4nWLdREWPUo-7X9uMHfrt~iEnTLJDM8FUBXaBWchC9n2b3Zd1Eafl5VkEw5Q294jXa9~GyZ~YF9cJpKQ8lZ3Za3Dk-G-9kVwq7DTFvnaBgj1Jmsl-Kw__", "https://s3-alpha-sig.figma.com/img/a874/fcc4/fd766260ca044a3e55008b216094160e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gz6xBntNbmGVDPcvZoHxL-AHSqVFID5MlgHfrnBJNBviWaLKUAVs0wb-GMH2yVM9b97y~wYk3pqCZQ0o~ko1a93dOBAWpGccR8nQFsv5NYhuzCV6YL2JZXLHS44HmxzLjKoi52uw-VTeJN8Q3vijHjdN3ueiaHLYRR4iZdYI235vZhBgDrqGqyYrvSUDql26s26crTWk34bjollHFYwMzSRQLdUli0v8fFzNiRhSlxAv2UOzYAwC3DpmTcghUX4N1YhroeOdxT6XvJ~6ZuYCvk4ycSBzjagr2zbtZHl6-pb0G99liXWZvmewdsFkUjx4EgIOTSqHQzzdbHsnwZeBNQ__"]
}
export class productController {

    private static instance: productController;

    private constructor() { }

    public static getInstance(): productController {
        if (!productController.instance) {
            productController.instance = new productController();
        }
        return productController.instance;
    }

    async getAllProducts(limit: number, skip: number) {
        return await Product.find().skip(skip - 1).limit(limit)
    }

    async createProduct() {
        return await Product.create(productTest)
    }


    async getProductById(id: string) {
        return await Product.findById(id)
    }

    async updateProduct(id:string,body:IProduct){
        return await Product.findByIdAndUpdate(id,body);
    }

    async deleteProduct(id:string){
        return await Product.findByIdAndDelete(id);
    }


}