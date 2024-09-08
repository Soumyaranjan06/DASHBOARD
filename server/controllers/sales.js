
// import OverallStat from "../models/OverallStat.js";


// export const getSales=async(req,res)=>{
//     try{
//         const OverallStat=await OverallStat.find();
//         res.status(200).json(OverallStat[0])    
//     }catch(error){
//        res.status(404).json({message:error.message});
//     }
// }

import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};