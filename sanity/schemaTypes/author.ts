import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType(schemaDefination : {
    name: "author",
    title : "Author",
    type: "document",
    icon: UserIcon,
    fields:[
        defineField (schemaField: {
            name: 'id',
            type: 'number',
        }),
      
         defineField (schemaField: {
            name: 'name',
            type: 'string',
        }),

         defineField (schemaField: {
            name: 'email',
            type: 'string',
        }),

         defineField (schemaField: {
            name: 'Image',
            type: 'url',
        }),

        
         defineField (schemaField: {
            name: 'bio',
            type: 'text',
        }),
    ],
        preview: {
            select: {
                title: 'title',
            },
        },
})