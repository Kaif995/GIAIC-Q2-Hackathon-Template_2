import { defineType, defineField } from "sanity"

export const product = defineType(
{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text', // Allows for longer text input
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number', // Numeric type for price
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image', // Image upload field
            options: {
                hotspot: true, // Enables cropping and focal point selection
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference', // Simple string for category
            to: [
                {
                    type: 'category'
                }
            ]
        }),
        defineField({
            name: 'inStock',
            title: 'In Stock',
            type: 'boolean', // Boolean to indicate stock status
        }),
    ],
});