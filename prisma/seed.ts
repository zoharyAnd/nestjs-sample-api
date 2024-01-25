import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Smart Home Helper' },
    update: {},
    create: {
      title: 'Smart Home Helper',
      body: 'Meet the Smart Home Helper, your personal assistant for home automation. Control lights, thermostat, ...',
      description:
        'Simplify your daily routine with the Smart Home Helper. Experience the convenience of a connected home at your fingertips',
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Tech Toolbox' },
    update: {},
    create: {
      title: 'Tech Toolbox',
      body: 'Introducing the Tech Toolbox—an all-in-one solution for everyday tech issues ...',
      description:
        'From fixing gadgets to optimizing devices, this compact toolbox is your go-to resource for quick and easy tech solutions. Empower yourself with the Tech Toolbox. Tackle tech challenges effortlessly and keep your devices running smoothly.',
      published: false,
    },
  });

  const post3 = await prisma.article.upsert({
    where: { title: 'Pocket-Sized Power Bank' },
    update: {},
    create: {
      title: 'Pocket-Sized Power Bank',
      body: 'Never run out of battery again with the Pocket-Sized Power Bank. Compact and portable...',
      description:
        'Never run out of battery again with the Pocket-Sized Power Bank. Compact and portable, this tech essential ensures your devices stay charged on the go. Say goodbye to low battery anxiety. Stay connected wherever you are with the Pocket-Sized Power Bank. A reliable companion for your devices, ensuring you\'re always powered up',
      published: false,
    },
  });

  const post4 = await prisma.article.upsert({
    where: { title: 'Digital Sketch Pad' },
    update: {},
    create: {
      title: 'Digital Sketch Pad',
      body: 'Unleash your creativity with the Digital Sketch Pad.',
      description:
        'This user-friendly device lets you sketch, draw, and create digital art with ease. Say goodbye to traditional paper and hello to a new era of artistic expression.',
      published: false,
    },
  });

  const post5 = await prisma.article.upsert({
    where: { title: 'Wireless Earbud Duo' },
    update: {},
    create: {
      title: 'Wireless Earbud Duo',
      body: 'Experience freedom with the Wireless Earbud Duo.',
      description:
        'These sleek and comfortable earbuds provide crystal-clear sound without the hassle of tangled wires. Enjoy music, take calls, and move effortlessly throughout your day.',
      published: false,
    },
  });

  console.log({ post1, post2, post3, post4, post5 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
