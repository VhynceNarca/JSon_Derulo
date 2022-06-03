const router = require("express").Router();
const {PrismaClient} = require("@/prisma/client")

const { User } = new PrismaClient();


router.get('/',async(req,res)=>{
    const users = await User.findMany({
        select: {
            name: true,
            password: true
        },
        where:{
            active: true
        }
    })
})

router.post('/',async(req,res)=>{
    const {email} = req.body;
    const userExists = await User.findUnique({
        where: {
            email
        },
        select:{
            email: true
        }

        
    });
    if(userExists){
        return res.status(400).json({
            msg : "Email used by an existing user. Please a different email-address."
        })
    }

    const newUser = await User.create({
        data : {
            username
        }
    });

    res.json(newUser);
})

module.exports = router