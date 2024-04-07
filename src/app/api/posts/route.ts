import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "desc";

  const whereCondition = category
    ? {
        Category: {
          is: {
            name: category,
          },
        },
        title: {
          contains: search,
          mode: "insensitive",
        },
      }
    : {
        title: {
          contains: search,
          mode: "insensitive",
        },
      };

  const post = await prisma.post.findMany({
    where: whereCondition as any,
    orderBy: {
      createdAt: sort,
    } as any,
    include: {
      Category: true,
    },
  });
  return Response.json(post);
}

export async function POST(request: Request) {
  const { title, content, categoryId } = await request.json();
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      categoryId: Number(categoryId),
    },
  });
  return Response.json(newPost);
}
