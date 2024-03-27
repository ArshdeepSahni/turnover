import { createTRPCRouter } from "./trpc";
import { interestRouter } from "./routers/interest";
import { userRouter } from "./routers/user";


export const appRouter = createTRPCRouter({
  interest: interestRouter,
  user: userRouter
});


export type AppRouter = typeof appRouter;
