import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Categories List
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Action' },
      { name: 'Horror' },
      { name: 'Comedy' },
      { name: 'Animated' },
      { name: 'Thriller' },
      { name: 'Scientific' },
    ],
  });

  // Movies List
  const movies = await prisma.movie.createMany({
    data: [
      { title: 'Die Hard', description: 'Action movie', categoryId: 5 },
      { title: 'The Conjuring', description: 'Horror movie', categoryId: 2 },
      { title: 'The Hangover', description: 'Comedy movie', categoryId: 3 },
      { title: 'Toy Story', description: 'Animated movie', categoryId: 4 },
    ],
  });

  // Seed one user
  const hashedPassword = await bcrypt.hash('12345', 10);

  const user = await prisma.user.create({
    data: {
      name: 'Osama Asghar',
      email: 'osamaasghar@gmail.com',
      password: hashedPassword,
      image: 'some image, bucket link here!',
      dob: '2000-01-14T00:00:00.000Z',
      address: 'xyz',
      categories: {
        connect: [{ id: 1 }, { id: 4 }, { id: 3 }],
      },
      categoryIds: [1, 4, 3],
    },
  });

  console.log({ categories, movies, user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
