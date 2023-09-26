import postService from "./service"
import { NextResponse,  } from "next/server";

export const GET = async (request) => {
    try {
        const result = await postService.read(request);
        console.log(result);
        return new NextResponse(result, {status: 200});
    } catch (error) {
        return new NextResponse(error, {status: 500});
    }
};