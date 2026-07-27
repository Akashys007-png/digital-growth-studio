import {NextResponse} from "next/server";import {z} from "zod";
const schema=z.object({name:z.string().min(2),business:z.string().min(2),email:z.email(),phone:z.string().optional(),industry:z.string(),website:z.string().optional(),services:z.string(),budget:z.string(),timeline:z.string(),details:z.string().min(20),consent:z.boolean()});
export async function POST(req:Request){try{const data=schema.parse(await req.json());if(process.env.RESEND_API_KEY&&process.env.CONTACT_TO_EMAIL){const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:"Website <onboarding@resend.dev>",to:[process.env.CONTACT_TO_EMAIL],subject:`New inquiry from ${data.business}`,text:JSON.stringify(data,null,2)})});if (!response.ok) {
  const error = await response.text();

  console.error("Resend Error:", error);

  return NextResponse.json(
    {
      ok: false,
      error,
    },
    {
      status: response.status,
    }
  );
}}else{console.log("Contact submission (development):",data)}return NextResponse.json({ok:true})}catch{return NextResponse.json({ok:false},{status:400})}}
