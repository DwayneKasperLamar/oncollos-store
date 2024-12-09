import { TagIcon } from "@sanity/icons";
import { defineField, defineType, } from "sanity";

export const  salesType = defineType({
    name: 'sales',
    title: 'Sales',
    type: 'document',
    icon : TagIcon,
    fields: [
        defineField({
            name : "title",
            title : "Sales Title",
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
            title: "Sales Description",
            }),

        defineField({
            name: "discountAmount",
            type: "number",
            title: "Discount Amount",
            description: "Amount off in percentage or fixed value",
        }),
        defineField({
            name: "couponCode",
            type: "string",
            title: "Coupon Code",
        }),
        defineField({
            name: "validFrom",
            type: "datetime",
            title: "Valid From",
        }),
        defineField({
            name: "validUntil",
            type: "datetime",
            title: "Valid Until",
        }),
        defineField({
            name: "isActive",
            type: "boolean",
            title: "Is Active",
            description: "Toogle to activate/Deactivate the sale",
            initialValue: true,
        }),
    ],
     preview: {
            select:{
                title: "title",
                discountAmount: "discountAmount",
                couponCode: "couponCode",
                isActive: "isActive",
            },
            prepare(selection) {
                const {title, discountAmount, couponCode, isActive} = selection;
                const status = isActive ? "Active" : "Inactive";
                return{
                    title,
                    subtitle: `${discountAmount}% off -code: ${couponCode} - ${status}`,
                };
            },
        }
});
