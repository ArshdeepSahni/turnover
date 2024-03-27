import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "../../db";

export const interestRouter = createTRPCRouter({
  /**
   * Queries
   */
  interest: publicProcedure.input(z.object({
    email: z.string().email()
  })).query(({ ctx, input }) => {

    return ctx.prisma.interest.findMany({
      where: {
        author: {
          email: {
            equals: input.email
          }
        }
      }
    });
  }),
  paginatedInterest: publicProcedure
  .input(z.object({
    currentPage: z.number(),
    email: z.string().email()
  }))
  .query(({ ctx, input }) => {
    const page = input?.currentPage; // Assuming you want to start with the first page
    console.log(page,'ppp')
  const pageSize = 6;

  const skip = (page-1) * pageSize;

    return ctx.prisma.interest.findMany({
      where: {
        author: {
          email: {
            equals: input?.email
          }
        }
      },
      take: pageSize,
      skip: skip,
    });
  }),
  drafts: publicProcedure.input(z.object({
    email: z.string().email()
  })).query(({ ctx, input }) => {
    return ctx.prisma.interest.findMany({
      where: {
        published: false,
        author: {
          email: {
            equals: input.email
          }
        }
      },
      include: {
        author: true,
      }
    });
  }),
  interestById: publicProcedure
    .input(z.object({
      id: z.number(),
      email: z.string().email()
    }))
    .query(({ ctx, input }) => {
      return ctx.prisma.interest.findUnique({
        where: {
          id: input.id,
          author: {
              email: {
                equals: input.email
              }
            }
        },
        include: {
          author: true,
        }
      })
    }),
  /**
   * This query isn't used in the app but it's useful for learning how to filter data with Prisma
   */
  filterInterests: publicProcedure
    .input(z.object({
      searchString: z.string().nullable(),
      email: z.string().email()
    }))
    .query(({ ctx, input }) => {

      const or = input.searchString
        ? {
          OR: [
            { interest: { contains: input.searchString } },
            {author: {
              email: {
                equals: input.email
              }
            }}
          ],
        }
        : {}

      return prisma.interest.findMany({
        where: { ...or }
      })
    }),
  /**
   * mutations
   */
  createDraft: publicProcedure
    .input(z.object({
      interest: z.string(),
      authorEmail: z.string(),
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.interest.create({
        data: {
          interest: input.interest,
          author: {
            connect: {
              email: input.authorEmail
            }
          }
        }
      })
    }),
  togglePublish: publicProcedure
    .input(z.object({
      id: z.number(),
      published: z.boolean(),
      email: z.string().email()
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.interest.update({
        where: {
          id: input.id,
          author: {
            email: {
              equals: input.email
            }
          }
        },
        data: {
          published: input.published,
        }
      })
    }),
  deleteInterest: publicProcedure
    .input(z.object({
      id: z.number(),
      email: z.string().email()
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.interest.delete({
        where: {
          id: input.id,
          author: {
            email: {
              equals: input.email
            }
          }
        }
      })
    }),

});
