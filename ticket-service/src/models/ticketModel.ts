import mongoose from "mongoose";

interface TicketAttributes{
    title: string,
    price: number,
    userId: string
}

interface TicketDoc extends mongoose.Document{
    title: string,
    price: number,
    userId: string,
    createdAt: string
}

interface TicketModel extends mongoose.Model<TicketDoc>{
    build(attributes: TicketAttributes) : TicketDoc;
}

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
},{
    toJSON:{
        transform(doc, ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
        }
    }
})

ticketSchema.statics.build = (attributes: TicketAttributes)=>{
    return new Ticket(attributes);
}

export const Ticket = mongoose.model<TicketDoc, TicketModel>("ticket", ticketSchema)