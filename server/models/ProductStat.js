import mongoose from "mongoose";

const ProductStatSchema=new mongoose.Schema(
    {
      productId:String,
      yearlySalesTotal:Number,
      yearlyToatlSoldUnits:Number,
      year:Number,
      monthlyData:[{
        month:String,
        totalSales:Number,
        toatlUnits:Number,
      }
      ],
      dailyData:[{
        data:String,
        totalSales:Number,
        totalUnits:Number,

      }]
    },{timestamps:true}
);

const ProductStat=mongoose.model("ProductStat",ProductStatSchema);
export default ProductStat;