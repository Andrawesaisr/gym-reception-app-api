const express=require('express')
const CLIENT= require('../model/client')
const router=express.Router()


router.post('/client',async(req,res)=>{
const body=req.body
    const client=new CLIENT(req.body)
    const now =new Date()
    try{
        client.from=now.toUTCString()
        const to= new Date(now.setDate(now.getDate() + ((client.monthlySub)*30)))
        client.to=to.toUTCString()
        const cost =client.monthlySub*300
        client.cost=`$${cost}`
        await client.save()
        res.send(client)

    }catch(e){
        res.send(e)
    }
})

router.get('/clients/all',async(req,res)=>{
    try{
        await CLIENT.find({}).then((clients)=>{
            res.send(clients)
        })
    }catch(e){
        res.send(e)
    }
})

router.get('/client/:id',async(req,res)=>{
const id=req.params.id
    try{
        const client= await CLIENT.findById(id)
        res.send(client)

    }catch(e){
        res.send(e)
    }

})


router.patch('/client/:id',async(req,res)=>{
     const updated =req.body
     const allowed=['monthlySub','invitations']   
       try{
        const client = await CLIENT.findById(req.params.id)
        allowed.forEach((allow)=>{
            client[allow]=updated[allow]
        })
        let now = new Date()
        client.from=now.toUTCString()
        let to= new Date(now.setDate(now.getDate() + ((client.monthlySub)*30)))
        client.to=to.toUTCString()
        await client.save()

        res.send(client)

        }catch(e){
            res.send(e)
        }
})



router.delete('/client/:id',async(req,res)=>{
    const id=req.params.id
    const msg='client has been deleted'
    try{
        const client= await CLIENT.findByIdAndDelete(id)
        res.send({msg,client})

    }catch(e){
        res.send(e)
    }
})

module.exports=router