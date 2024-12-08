import { TagIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
    name: 'category',
    title : 'Category',
    type: 'document',
    icon : TagIcon,
    fields: [
        defineField({
            name : "name",
            type: "string",
        }),
        defineField({
            name : "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name : "description",
            type : "text",
        })
    ],
    preview :{
        select: {
            title:"title",
            Subtitle:   "description",
        }
    }
})  