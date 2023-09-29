import postService from "./service"
import { NextResponse,  } from "next/server";

export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    try {
        const result = await postService.read();
        let json_response = {
            status: "success",
            results: result.length,
            result,
        };
        return NextResponse.json(json_response);
    } catch (error) {
        let error_response = {
            status: "error",
            message: error.stack,
        };
        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};