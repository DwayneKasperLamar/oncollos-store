import {TrolleyIcon} from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const productType = defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image",
            options: {
                hotspot: true,  // Enables UI for selecting image focal point
                metadata: ["blurhash", "lqip"], // Adds support for image previews
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "price",
            title: 'price',
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "array",
            of: [{
                type: "block",
                // Customize block content
                styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'Quote', value: 'blockquote'}
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                marks: {
                    decorators: [
                        {title: 'Strong', value: 'strong'},
                        {title: 'Emphasis', value: 'em'},
                        {title: 'Code', value: 'code'}
                    ],
                    annotations: [
                        {
                            title: 'URL',
                            name: 'link',
                            type: 'object',
                            fields: [
                                {
                                    title: 'URL',
                                    name: 'href',
                                    type: 'url'
                                }
                            ]
                        }
                    ]
                }
            }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'categories',
            title: "categories",
            type: "array",
            of: [{type: "reference", to: {type: "category"}}],
            validation: (Rule) => Rule.min(1).max(20).required().error("You must have at least one category"),
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
            price: "price",
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `$${select.price}`,
                media: select.media,
            };
        },
    },
});