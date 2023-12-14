
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'
import {convertXML}  from 'simple-xml-to-json'



export async function POST(req: NextRequest) {
    const xml = await req.text()

    const jsonData = convertXML(xml)
    return Response.json(jsonData)
  }