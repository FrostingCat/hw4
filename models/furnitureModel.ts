import mongoose, {Schema} from "mongoose";

const furnitureSchema = new Schema({
    size: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    color: {
        name: {
            type: String,
            required: true
        },
        HEX: {
            type: String,
            required: true
        }
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

export const ChairModel = mongoose.model('chairs', furnitureSchema);
export const ClosetModel = mongoose.model('closets', furnitureSchema);
export const TableModel = mongoose.model('tables', furnitureSchema);