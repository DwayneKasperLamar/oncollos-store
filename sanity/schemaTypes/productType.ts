import {TrolleyIcon} from "@sanity/icons"
// import { Subtitles } from "lucide-react"
import { defineField, defineType } from "sanity"

export const productType = defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon : TrolleyIcon,
    fields: [
        defineField({
            name : "name",
            title : "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "product Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "description",
            title: 'price',
            type: "number",
            validation: (Rule)=> Rule.required().min(0),
        }),
        defineField({
            name: 'categories',
            title:"categories",
            type: "array",
            of:[{type: "reference", to: {type: "category"} }]
        }),
        defineField({
            name: "stock",
            title: "stock",
            type: "number",
            validation:(Rule)=>Rule.min(0),
        }),

        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options:{
                source:"name",
                maxLength:96,
            },
            validation:(Rule)=>Rule.required(),
        }),
        
    ],
    preview:{
        select: {
            title: "name",
            media: "image",
            subtitle: "price",
        },
        prepare(select){
            return{
                title: select.title,
                subtitle:`$${select.subtitle}`,
                media: select.media,
            }
        }
    }
});