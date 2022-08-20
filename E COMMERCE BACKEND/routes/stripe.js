const router=require("express").Router();
 const Stripe=require('stripe')(process.env.STRIPE_KEY);
 const bodyparser= require('body-parser')
 const uuid=require('uuid').v4

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())
router.post('/checkout',(req,res)=>{
   console.log(req.body)
});
//  router.post('/checkout',(req,res)=>{
//     Stripe.charges.create({
//         source:req.body.tokenId,
//         amount:req.body.amount,
//         currency:"usd",
//     },
//     (stripeErr,stripeRes)=>{
//         if(stripeErr){
//             res.status(500).json(stripeErr);
//         }else{
//             res.status(200).json(stripeRes);
//         }
//     });
//  });

module.exports =router;