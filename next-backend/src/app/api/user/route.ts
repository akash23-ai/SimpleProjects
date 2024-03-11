import { NextRequest, NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(){
    // database login 
    return Response.json({
        email : "akash@gmail.com",
        name : "akash"
    })
}

const prisma = new PrismaClient()

export async function POST(req : NextRequest, res : NextResponse ) {
    // extract the body

    // it returns a promise 
    const body = await req.json()

    console.log(body)

    const response = await prisma.user.create({
        data : {
            username: body.username,
            password : body.password
        }
    })

    console.log(response)


    // const header = req.headers
    // console.log(header)
    // store the body in the database 

    // const response = NextResponse.next()
    // console.log(response)

    return NextResponse.json({message : "logged in"}, {status : 200})
}