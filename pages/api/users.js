import { user } from "@/util/db";


export default function GET(req,res){
    const data=user;
    return res.json(data,{status:200})
}
