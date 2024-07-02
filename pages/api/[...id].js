// import { user } from "@/util/db";


// export default function GET(req,res){

//     const { id } = req.query; 
   
//     const userData = user.filter((item)=> item.id=== parseInt(id, 10));
//     return res.json(
//         userData.length==0?{result:"No data Found",success: false}:{result:userData,success:true}
//         ,{status:200})
// }


import { user } from "@/util/db";

export default function handler(req, res) {
  const { id } = req.query;
  const userId = parseInt(id);

  const foundUser = user.users.find(u => u.id === userId);

  if (foundUser) {
    res.status(200).json(foundUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}












