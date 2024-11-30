import { title } from "process";
import { defineType } from "sanity";

export const author = defineType(schemaDefination :{
    name: "author",
    title : "Author",
    type: "document",
    fields:[
        {
            name : "name",
            title: "Name",
            type: "string",
        },

        {
            name: "image",
            title : "Image",
            type:"image"

        }
    ]
})