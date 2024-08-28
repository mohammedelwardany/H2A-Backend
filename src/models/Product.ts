import { IProduct } from "interfaces/IProduct";
import { model, Schema } from "mongoose";


const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
      },
      subName: {
        type: String,
        required: false
      },
      pros: {
        type: [String],
        required: false
      },
      images: {
        type: [String], 
        required: false
      },
      activeImage:{
        type:String,
        required: false
      },
      hoverImage:{
        type:String,
        required: false
      },
      feature:{
        type:[String],
        required: false
      },
      description: {
        describe: {
          type: String,
          required: true
        },
        benefits: {
          type: [String],
          required: false
        }
      },
      specifications: {
        horizontalAdjustment: {
          type: String,
          required: false
        },
        verticalAdjustment: {
          type: String,
          required: false
        },
        wheel: {
          type: String,
          required: false
        }
      },
      clinicalSegments: {
        segments: {
          type: [String], 
          required: false
        },
        fieldOfApplication: {
          type: [String], 
          required: false
        }
      },
      document: [{
        pdfUrl: {
          type: String,
          required: false
        },
        size:{
            type:String,
            required: false
        },
        title:{
            type:String,
            required: false  
        }
      }]
})


const Product = model('product',productSchema);
export default Product;