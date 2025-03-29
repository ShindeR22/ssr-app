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

        const users = Array.from({ length: perPage }, () => ({
                id: faker.number.int({ min: 1000, max: 9999 }),
                name: faker.person.fullName(),
                image: faker.image.avatar(),
                address: faker.location.streetAddress(),
        }));

        const pagination = {
                currentPage,
                nextPage: currentPage < maxPages ? currentPage + 1 : null,
                total: totalUsers,
                hasNextPage: currentPage < maxPages,
        };

        return NextResponse.json({ users, pagination }, { status: 200 });
}