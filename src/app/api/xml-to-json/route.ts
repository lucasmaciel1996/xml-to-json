import { NextRequest } from 'next/server'
import  xml from 'xml-js'

export async function POST(req: NextRequest) {
    const xmlString = await req.text()

    const jsonData = JSON.parse(xml.xml2json(xmlString,{compact:true,ignoreComment: true,}))
    return Response.json(jsonData)
  }