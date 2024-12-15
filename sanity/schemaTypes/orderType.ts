import {defineArrayMember, defineField, defineType} from "sanity";
import {BasketIcon} from "@sanity/icons";
// import Email from "next-auth/providers/email";
// import { Subtitles } from "lucide-react";

export const orderType = defineType({
    name : 'order',
    title: "Order",
    type:  "document",
    icon: BasketIcon,
    fields: [
        defineField({
            name:"orderNumber",
            title:"Order Number",
            type: "string",
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:"stripeCheckoutSession",
            title:"Stripe Checkout Session ID",
            type: "string",
        }),
        defineField({
            name:"StripeCustomerId",
            title:"Stripe Customer ID",
            type: "string",
            validation: (Rule)=>Rule.required(),
        }),
        defineField({
            name:"stripePaymentIntentId",
            title:"Stripe Payment Intent ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "products",
            title: "Products",
            type: "array",
            of:[
                defineArrayMember({
                    type:"object",
                    fields: [
                        defineField({
                            name:"product",
                            title:"Product Bought",
                            type:"reference",
                            to:[{type:"product"}]
                        }),
                        defineField({
                            name:"quantity",
                            title:"Quantity Purchased",
                            type:"number",
                        }),
                    ],
                    preview:{
                        select:{
                            product: "product.name",
                            quantity: "quantity",
                            image:"product.image",
                            price: "product.price",
                            currency: "product.currency",
                        },
                        prepare(select){
                            return{
                                title: `${select.quantity} x ${select.product}`,
                                media: select.image,
                                subtitle: `${select.currency} ${select.price}`,
                            }
                        }
                    }
                 
                }),
            ],
        }),
        defineField({
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "currency",
            title: "Currency",
            type: "string",
            validation: (Rule)=> Rule.required(),
        }),
        defineField({
            name: "amountDiscount",
            title: "Amount Discount",
            type: "number",
            validation: (Rule) => Rule.min(0)
        }),
        defineField({
            name: "status",
            title: "Order Status",
            type: "string",
            options:{
                list:[
                    {title: "Pending", value:"pending"},
                    {title: "Paid", value:"paid"},
                    {title: "Shipped", value:"shipped"},
                    {title: "Cancelled", value:"cancelled"},
                    {title: "Delivered", value:"delivered"},
                ],
            },
        }),
        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: (Rule) =>Rule.required(),
        })
    ],
    preview: {
        select: {
            name: "customerName",
            amount: "totalPrice",
            currency:  "currency",
            orderId: "orderNumber",
            Email: "Email",
        },
        prepare(select){
            const orderIdSnippet = `${select.orderId.slice(0,5)}...${select.orderId.slice(-5)}`;
            return{
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.currency} ${select.amount}`,
                media: BasketIcon,
            }
        }
    }

})


    