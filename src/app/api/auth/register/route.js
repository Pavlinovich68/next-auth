import {NextResponse} from "next/server";
import userService from '../service'
export const POST = async (request) => {
    const {name, email, password} = await request.json();
    console.log('console.log(request.json()):');
    try {
        const result = await userService.create(name, email, password);
        let json_response = {
            status: "success",
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
}