import { INews } from "interfaces/INews";
import { model, Schema } from "mongoose";


const newsScheme = new Schema<INews>({
    title: {
        type: String,
        required: true
      },
      paragraph: {
        type: String,
        required: false
      },
        image: {
        type: String,
        required: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
})


const News = model('news',newsScheme);
export default News;