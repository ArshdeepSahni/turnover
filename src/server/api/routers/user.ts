
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  signupUser: publicProcedure
    .input(z.object({
      name: z.string().nullable(),
      email: z.string().email(),
      password: z.string()
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name ? input.name : undefined,
          password: input.password,
          loginTime: `${Date.now()}`
        }
      })
    }),

    signinUser: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string(),
    }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: {
          email: input.email,
          password: input.password,
        },
        data: {
          loginTime: `${Date.now()}`,
        }
      })
    }),
});
