import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Admin',
    email: 'admin@prisma.io',
    interests: {
      create: [
        {
          interest: 'Interest 1',
          published: true,
        },
        {
          interest: 'Interest 2',
          published: true,
        },
        {
          interest: 'Interest 3',
          published: true,
        },
        {
          interest: 'Interest 4',
          published: true,
        },
        {
          interest: 'Interest 5',
          published: true,
        },
        {
          interest: 'Interest 6',
          published: true,
        },
        {
          interest: 'Interest 7',
          published: true,
        },
        {
          interest: 'Interest 8',
          published: true,
        },
        {
          interest: 'Interest 9',
          published: true,
        },
        {
          interest: 'Interest 10',
          published: true,
        },
        {
          interest: 'Interest 11',
          published: true,
        },
        {
          interest: 'Interest 12',
          published: true,
        },
        {
          interest: 'Interest 13',
          published: true,
        },
        {
          interest: 'Interest 14',
          published: true,
        },
        {
          interest: 'Interest 15',
          published: true,
        },
        {
          interest: 'Interest 16',
          published: true,
        },
        {
          interest: 'Interest 17',
          published: true,
        },
        {
          interest: 'Interest 18',
          published: true,
        },
        {
          interest: 'Interest 19',
          published: true,
        },
        {
          interest: 'Interest 20',
          published: true,
        },
        {
          interest: 'Interest 21',
          published: true,
        },
        {
          interest: 'Interest 22',
          published: true,
        },
        {
          interest: 'Interest 23',
          published: true,
        },
        {
          interest: 'Interest 24',
          published: true,
        },
        {
          interest: 'Interest 25',
          published: true,
        },
        {
          interest: 'Interest 26',
          published: true,
        },
        {
          interest: 'Interest 27',
          published: true,
        },
        {
          interest: 'Interest 28',
          published: true,
        },
        {
          interest: 'Interest 29',
          published: true,
        },
        {
          interest: 'Interest 30',
          published: true,
        },
        {
          interest: 'Interest 31',
          published: true,
        },
        {
          interest: 'Interest 32',
          published: true,
        },
        {
          interest: 'Interest 33',
          published: true,
        },
        {
          interest: 'Interest 34',
          published: true,
        },
        {
          interest: 'Interest 35',
          published: true,
        },
        {
          interest: 'Interest 36',
          published: true,
        },
        {
          interest: 'Interest 37',
          published: true,
        },
        {
          interest: 'Interest 38',
          published: true,
        },
        {
          interest: 'Interest 39',
          published: true,
        },
        {
          interest: 'Interest 40',
          published: true,
        },
        {
          interest: 'Interest 41',
          published: true,
        },
        {
          interest: 'Interest 42',
          published: true,
        },
        {
          interest: 'Interest 43',
          published: true,
        },
        {
          interest: 'Interest 44',
          published: true,
        },
        {
          interest: 'Interest 45',
          published: true,
        },
        {
          interest: 'Interest 46',
          published: true,
        },
        {
          interest: 'Interest 47',
          published: true,
        },
        {
          interest: 'Interest 48',
          published: true,
        },
        {
          interest: 'Interest 49',
          published: true,
        },
        {
          interest: 'Interest 50',
          published: true,
        },
      ],
    },
    loginTime: `${Date.now()}`,
    password: 'Admin@123'
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    interests: {
      create: [
        {
          interest: 'Men T-shirts',
          published: true,
        },
      ],
    },
    loginTime: `${Date.now()}`,
    password: 'Admin@123'
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    interests: {
      create: [
        {
          interest: 'Makeup',
          published: true,
        },
        {
          interest: 'Jewellery',
          published: true,
        },
      ],
    },
    loginTime: `${Date.now()}`,
    password: 'Admin@123'
  },
]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
    }
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
