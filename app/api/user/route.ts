import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
        const { searchParams } = new URL(req.url);
        const currentPage = parseInt(searchParams.get("page") || "1", 10);
        const perPage = parseInt(searchParams.get("limit") || "10", 10);
        const totalUsers = 100;
        const maxPages = 10;

        if (currentPage > maxPages) {
                return NextResponse.json({ error: 'Page limit exceeded' }, { status: 400 });
        }

        // Define an array of photographer types
        const photographerTypes = [
                "Portrait Photographer",
                "Wedding & Event Photographer",
                "Wildlife Photographer",
                "Landscape Photographer",
                "Sports Photographer",
                "Fashion Photographer",
                "Commercial Photographer",
                "Street Photographer",
                "Architectural Photographer",
                "Food Photographer",
                "Documentary Photographer",
                "Aerial Photographer",
                "Fine Art Photographer",
                "Macro Photographer",
                "Travel Photographer",
                "Product Photographer",
                "Real Estate Photographer",
                "Stock Photographer",
                "Underwater Photographer",
                "Medical & Scientific Photographer"
        ];

        // Generate users with an additional photographer type field
        const users = Array.from({ length: perPage }, () => ({
                id: faker.number.int({ min: 1000, max: 9999 }),
                name: faker.person.fullName(),
                image: faker.image.avatar(),
                address: faker.location.streetAddress(),
                city: faker.location.city(),
                mobile: `+91 ${faker.number.int({ min: 6000000000, max: 9999999999 })}`,
                photographerType: photographerTypes[Math.floor(Math.random() * photographerTypes.length)]
        }));

        const pagination = {
                currentPage,
                nextPage: currentPage < maxPages ? currentPage + 1 : null,
                total: totalUsers,
                hasNextPage: currentPage < maxPages,
        };

        return NextResponse.json({ users, pagination }, { status: 200 });
}
