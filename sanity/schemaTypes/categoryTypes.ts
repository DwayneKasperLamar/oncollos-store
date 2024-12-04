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
            title : "Category Name",
            type: "string",
        }),
        defineField({
            name : "slug",
            title : "Slug",
            type: "slug",
            options: {
                source: "name",
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