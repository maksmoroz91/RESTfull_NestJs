import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Movie {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ min: 1, max: 10, default: null })
    rating: number;

    @Prop({ default: [] })
    imageUrls: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
